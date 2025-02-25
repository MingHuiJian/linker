﻿using linker.libs;

namespace linker.messenger.flow
{
    public sealed class FlowTransfer
    {
        private List<IFlow> flows = new List<IFlow>();
        public FlowTransfer()
        {
        }

        public void AddFlows(List<IFlow> list)
        {
            LoggerHelper.Instance.Info($"add flow {string.Join(",", list.Select(c => c.GetType().Name))}");
            this.flows = this.flows.Concat(list).Distinct().ToList();
        }

        public Dictionary<string, FlowItemInfo> GetFlows()
        {
            return flows.Select(c => new FlowItemInfo { ReceiveBytes = c.ReceiveBytes, SendtBytes = c.SendtBytes, FlowName = c.FlowName }).ToDictionary(c => c.FlowName);
        }

       // Dictionary<byte,Dictionary<string,>>

    }

}
