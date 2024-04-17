﻿using cmonitor.api;
using cmonitor.plugins.signin.messenger;
using cmonitor.plugins.wallpaper.messenger;
using cmonitor.plugins.wallpaper.report;
using cmonitor.server;
using common.libs.extends;
using MemoryPack;

namespace cmonitor.plugins.wallpaper
{
    public sealed class WallpaperApiController : IApiController
    {
        private readonly MessengerSender messengerSender;
        private readonly SignCaching signCaching;
        public WallpaperApiController(MessengerSender messengerSender, SignCaching signCaching)
        {
            this.messengerSender = messengerSender;
            this.signCaching = signCaching;
        }
        public bool Update(ApiControllerParamsInfo param)
        {
            WallpaperLockInfo info = param.Content.DeJson<WallpaperLockInfo>();
            byte[] bytes = MemoryPackSerializer.Serialize(new WallpaperConfigInfo
            {
                Open = info.Value,
                ImgUrl = info.Url
            });
            for (int i = 0; i < info.Names.Length; i++)
            {
                if (signCaching.Get(info.Names[i], out SignCacheInfo cache) && cache.Connected)
                {
                    _ = messengerSender.SendOnly(new MessageRequestWrap
                    {
                        Connection = cache.Connection,
                        MessengerId = (ushort)WallpaperMessengerIds.Update,
                        Payload = bytes
                    });
                }
            }
            return true;
        }
    }

    public sealed class WallpaperLockInfo
    {
        public string[] Names { get; set; }
        public bool Value { get; set; }
        public string Url { get; set; } = string.Empty;
    }
}
