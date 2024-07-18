﻿using linker.plugins.signin.messenger;
using linker.plugins.updater.config;
using linker.server;
using MemoryPack;

namespace linker.plugins.updater.messenger
{
    public sealed class UpdaterClientMessenger : IMessenger
    {
        private readonly UpdaterTransfer updaterTransfer;
        public UpdaterClientMessenger(UpdaterTransfer updaterTransfer)
        {
            this.updaterTransfer = updaterTransfer;
        }

        /// <summary>
        /// 确认更新
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)UpdaterMessengerIds.Confirm)]
        public void Confirm(IConnection connection)
        {
            UpdaterConfirmInfo confirm = MemoryPackSerializer.Deserialize<UpdaterConfirmInfo>(connection.ReceiveRequestWrap.Payload.Span);
            updaterTransfer.Confirm(confirm.Version);
        }

        /// <summary>
        /// 更新信息
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)UpdaterMessengerIds.Update)]
        public void Update(IConnection connection)
        {
            UpdateInfo info = MemoryPackSerializer.Deserialize<UpdateInfo>(connection.ReceiveRequestWrap.Payload.Span);
            updaterTransfer.Update(info);
        }
        /// <summary>
        /// 关闭信息
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)UpdaterMessengerIds.Exit)]
        public void Exit(IConnection connection)
        {
            updaterTransfer.Exit();
        }
    }


    public sealed class UpdaterServerMessenger : IMessenger
    {
        private readonly MessengerSender messengerSender;
        private readonly SignCaching signCaching;

        public UpdaterServerMessenger(MessengerSender messengerSender, SignCaching signCaching)
        {
            this.messengerSender = messengerSender;
            this.signCaching = signCaching;
        }

        /// <summary>
        /// 转发确认更新消息
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [MessengerId((ushort)UpdaterMessengerIds.ConfirmForward)]
        public async Task ConfirmForward(IConnection connection)
        {
            UpdaterConfirmInfo confirm = MemoryPackSerializer.Deserialize<UpdaterConfirmInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) && signCaching.TryGet(confirm.MachineId, out SignCacheInfo cache1) && cache.GroupId == cache1.GroupId)
            {
                await messengerSender.SendOnly(new MessageRequestWrap
                {
                    Connection = cache1.Connection,
                    MessengerId = (ushort)UpdaterMessengerIds.Confirm,
                    Payload = connection.ReceiveRequestWrap.Payload
                });
            }
        }

        /// <summary>
        /// 转发更新消息
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)UpdaterMessengerIds.UpdateForward)]
        public void UpdateForward(IConnection connection)
        {
            UpdateInfo info = MemoryPackSerializer.Deserialize<UpdateInfo>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache))
            {
                foreach (var item in signCaching.Get(cache.GroupId).Where(c => c.Connected && c.MachineId != connection.Id))
                {
                    _ = messengerSender.SendOnly(new MessageRequestWrap
                    {
                        Connection = item.Connection,
                        MessengerId = (ushort)UpdaterMessengerIds.Update,
                        Payload = connection.ReceiveRequestWrap.Payload
                    });
                }

            }
        }

        /// <summary>
        /// 转发关闭消息
        /// </summary>
        /// <param name="connection"></param>
        [MessengerId((ushort)UpdaterMessengerIds.ExitForward)]
        public async Task ExitForward(IConnection connection)
        {
            string machineId = MemoryPackSerializer.Deserialize<string>(connection.ReceiveRequestWrap.Payload.Span);
            if (signCaching.TryGet(connection.Id, out SignCacheInfo cache) && signCaching.TryGet(machineId, out SignCacheInfo cache1) && cache.GroupId == cache1.GroupId)
            {
                await messengerSender.SendOnly(new MessageRequestWrap
                {
                    Connection = cache1.Connection,
                    MessengerId = (ushort)UpdaterMessengerIds.Exit
                });
            }
        }
    }
}
