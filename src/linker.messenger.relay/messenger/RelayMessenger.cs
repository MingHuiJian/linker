﻿
using linker.messenger.relay.client.transport;
using linker.libs;
using linker.messenger.relay.client;
using linker.messenger.relay.server;
using linker.messenger.signin;
using linker.messenger.relay.server.validator;
using linker.libs.extends;

namespace linker.messenger.relay.messenger
{
    /// <summary>
    /// 中继客户端
    /// </summary>
    public class RelayClientMessenger : IMessenger
    {
        private readonly RelayClientTransfer relayTransfer;
        private readonly ISerializer serializer;
        public RelayClientMessenger(RelayClientTransfer relayTransfer, ISerializer serializer)
        {
            this.relayTransfer = relayTransfer;
            this.serializer = serializer;
        }

        /// <summary>
        /// 收到中继请求
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.Relay)]
        public async Task Relay(IConnection connection)
        {
            client.transport.RelayInfo info = serializer.Deserialize<client.transport.RelayInfo>(connection.ReceiveRequestWrap.Payload.Span);
            bool res = await relayTransfer.OnBeginAsync(info).ConfigureAwait(false);
            connection.Write(res ? Helper.TrueArray : Helper.FalseArray);
        }
    }

    /// <summary>
    /// 中继服务端
    /// </summary>
    public class RelayServerMessenger : IMessenger
    {
        private readonly IMessengerSender messengerSender;
        private readonly SignInServerCaching signCaching;
        private readonly RelayServerMasterTransfer relayServerTransfer;
        private readonly RelayServerValidatorTransfer relayValidatorTransfer;
        private readonly ISerializer serializer;
        private readonly IRelayServerCdkeyStore relayServerCdkeyStore;
        private readonly IRelayServerStore relayServerStore;

        public RelayServerMessenger(IMessengerSender messengerSender, SignInServerCaching signCaching, ISerializer serializer, RelayServerMasterTransfer relayServerTransfer, RelayServerValidatorTransfer relayValidatorTransfer, IRelayServerCdkeyStore relayServerCdkeyStore, IRelayServerStore relayServerStore)
        {
            this.messengerSender = messengerSender;
            this.signCaching = signCaching;
            this.relayServerTransfer = relayServerTransfer;
            this.relayValidatorTransfer = relayValidatorTransfer;
            this.serializer = serializer;
            this.relayServerCdkeyStore = relayServerCdkeyStore;
            this.relayServerStore = relayServerStore;
        }

        /// <summary>
        /// 测试一下中继通不通
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)RelayMessengerIds.RelayTest)]
        public async Task RelayTest(IConnection connection)
        {
            RelayTestInfo info = serializer.Deserialize<RelayTestInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }
            string result = await relayValidatorTransfer.Validate(new client.transport.RelayInfo
            {
                SecretKey = info.SecretKey,
                FromMachineId = info.MachineId,
                FromMachineName = cache.MachineName,
                TransactionId = "test",
                TransportName = "test",
            }, cache, null);

            var nodes = relayServerTransfer.GetNodes(string.IsNullOrWhiteSpace(result));
            connection.Write(serializer.Serialize(nodes));
        }


        /// <summary>
        /// 请求中继
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)RelayMessengerIds.RelayAsk)]
        public async Task RelayAsk(IConnection connection)
        {
            RelayInfo info = serializer.Deserialize<RelayInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cacheFrom) == false || signCaching.TryGet(info.RemoteMachineId, out SignCacheInfo cacheTo) == false || cacheFrom.GroupId != cacheTo.GroupId)
            {
                connection.Write(serializer.Serialize(new RelayAskResultInfo { }));
                return;
            }

            info.RemoteMachineId = cacheTo.MachineId;
            info.FromMachineId = cacheFrom.MachineId;
            info.RemoteMachineName = cacheTo.MachineName;
            info.FromMachineName = cacheFrom.MachineName;

            RelayAskResultInfo result = new RelayAskResultInfo();
            string error = await relayValidatorTransfer.Validate(info, cacheFrom, cacheTo);
            bool validated = string.IsNullOrWhiteSpace(error);
            result.Nodes = relayServerTransfer.GetNodes(validated);

            List<RelayServerCdkeyStoreInfo> cdkeys = await relayServerCdkeyStore.GetAvailable(info.UserId);

            if (result.Nodes.Count > 0)
            {
                result.FlowingId = relayServerTransfer.AddRelay(cacheFrom.MachineId, cacheFrom.MachineName, cacheTo.MachineId, cacheTo.MachineName, cacheFrom.GroupId, validated, cdkeys.Select(c => new RelayServerCdkeyInfo { Bandwidth = c.Bandwidth, CdkeyId = c.CdkeyId, LastBytes = c.LastBytes }).ToList());
            }

            connection.Write(serializer.Serialize(result));
        }

        /// <summary>
        /// 收到中继请求
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.RelayForward)]
        public async Task RelayForward(IConnection connection)
        {
            client.transport.RelayInfo info = serializer.Deserialize<client.transport.RelayInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cacheFrom) == false || signCaching.TryGet(info.RemoteMachineId, out SignCacheInfo cacheTo) == false || cacheFrom.GroupId != cacheTo.GroupId)
            {
                connection.Write(Helper.FalseArray);
                return;
            }

            //需要验证
            if (relayServerTransfer.NodeValidate(info.NodeId))
            {
                info.RemoteMachineId = cacheTo.MachineId;
                info.FromMachineId = cacheFrom.MachineId;
                info.RemoteMachineName = cacheTo.MachineName;
                info.FromMachineName = cacheFrom.MachineName;
                string result = await relayValidatorTransfer.Validate(info, cacheFrom, cacheTo);
                if (string.IsNullOrWhiteSpace(result) == false)
                {
                    connection.Write(Helper.FalseArray);
                    return;
                }
            }

            info.RemoteMachineId = cacheFrom.MachineId;
            info.FromMachineId = cacheTo.MachineId;
            info.RemoteMachineName = cacheFrom.MachineName;
            info.FromMachineName = cacheTo.MachineName;
            try
            {
                MessageResponeInfo resp = await messengerSender.SendReply(new MessageRequestWrap
                {
                    Connection = cacheTo.Connection,
                    MessengerId = (ushort)RelayMessengerIds.Relay,
                    Payload = serializer.Serialize(info)
                }).ConfigureAwait(false);
                if (resp.Code == MessageResponeCodes.OK && resp.Data.Span.SequenceEqual(Helper.TrueArray))
                {
                    connection.Write(Helper.TrueArray);
                    return;
                }
                connection.Write(Helper.FalseArray);
            }
            catch (Exception)
            {
                connection.Write(Helper.FalseArray);
            }
        }


        /// <summary>
        /// 获取缓存
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.NodeGetCache)]
        public void NodeGetCache(IConnection connection)
        {
            string key = serializer.Deserialize<string>(connection.ReceiveRequestWrap.Payload.Span);
            if (relayServerTransfer.TryGetRelayCache(key, out RelayCacheInfo cache))
            {
                connection.Write(serializer.Serialize(cache));
            }
            else
            {
                connection.Write(Helper.EmptyArray);
            }
        }
        /// <summary>
        /// 获取缓存
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.NodeReport)]
        public void NodeReport(IConnection connection)
        {
            RelayServerNodeReportInfo info = serializer.Deserialize<RelayServerNodeReportInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (LoggerHelper.Instance.LoggerLevel <= LoggerTypes.DEBUG)
            {
                LoggerHelper.Instance.Debug($"relay node report : {info.ToJson()}");
            }
            relayServerTransfer.SetNodeReport(connection, info);
        }
        /// <summary>
        /// 消耗流量报告
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.TrafficReport)]
        public async Task TrafficReport(IConnection connection)
        {
            RelayTrafficUpdateInfo info = serializer.Deserialize<RelayTrafficUpdateInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (relayServerStore.SecretKey != info.SecretKey)
            {
                connection.Write(serializer.Serialize(new Dictionary<string, long>()));
                return;
            }
            Dictionary<long, long> result = await relayServerTransfer.AddTraffic(info);
            connection.Write(serializer.Serialize(result));
        }


        /// <summary>
        /// 检查权限
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.AccessCdkey)]
        public void AccessCdkey(IConnection connection)
        {
            string secretKey = serializer.Deserialize<string>(connection.ReceiveRequestWrap.Payload.Span);
            connection.Write(relayServerStore.SecretKey == secretKey ? Helper.TrueArray : Helper.FalseArray);
        }
        /// <summary>
        /// 添加CDKEY
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)RelayMessengerIds.AddCdkey)]
        public async Task AddCdkey(IConnection connection)
        {
            RelayServerCdkeyAddInfo info = serializer.Deserialize<RelayServerCdkeyAddInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }
            if (relayServerStore.SecretKey != info.SecretKey)
            {
                connection.Write(Helper.FalseArray);
                return;
            }

            await relayServerCdkeyStore.Add(info.Data);
            connection.Write(Helper.TrueArray);
        }

        /// <summary>
        /// 删除Cdkey
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.DelCdkey)]
        public async Task DelCdkey(IConnection connection)
        {
            RelayServerCdkeyDelInfo info = serializer.Deserialize<RelayServerCdkeyDelInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }
            if (relayServerStore.SecretKey == info.SecretKey)
            {
                await relayServerCdkeyStore.Del(info.CdkeyId);
            }
            else
            {
                await relayServerCdkeyStore.Del(info.CdkeyId,info.UserId);
            }
            connection.Write(Helper.TrueArray);
        }

        /// <summary>
        /// 查询CDKEY
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.PageCdkey)]
        public async Task PageCdkey(IConnection connection)
        {
            RelayServerCdkeyPageRequestInfo info = serializer.Deserialize<RelayServerCdkeyPageRequestInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) == false)
            {
                connection.Write(serializer.Serialize(new RelayServerCdkeyPageResultInfo { }));
                return;
            }
            if (relayServerStore.SecretKey != info.SecretKey && string.IsNullOrWhiteSpace(info.UserId))
            {
                connection.Write(serializer.Serialize(new RelayServerCdkeyPageResultInfo { }));
                return;
            }

            var page = await relayServerCdkeyStore.Page(info);

            connection.Write(serializer.Serialize(page));
        }


        /// <summary>
        /// 测试cdkey
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.TestCdkey)]
        public async Task TestCdkey(IConnection connection)
        {
            RelayServerCdkeyImportInfo info = serializer.Deserialize<RelayServerCdkeyImportInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) == false)
            {
                connection.Write(serializer.Serialize(new RelayServerCdkeyTestResultInfo { }));
                return;
            }
            if (relayServerStore.SecretKey != info.SecretKey)
            {
                connection.Write(serializer.Serialize(new RelayServerCdkeyTestResultInfo { }));
                return;
            }
            RelayServerCdkeyTestResultInfo test = await relayServerCdkeyStore.Test(info);
            connection.Write(serializer.Serialize(test));
        }

        /// <summary>
        /// 导入cdkey
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)RelayMessengerIds.ImportCdkey)]
        public async Task ImportCdkey(IConnection connection)
        {
            RelayServerCdkeyImportInfo info = serializer.Deserialize<RelayServerCdkeyImportInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }
            bool result = await relayServerCdkeyStore.Import(info);
            connection.Write(result ? Helper.TrueArray : Helper.FalseArray);
        }
    }
}
