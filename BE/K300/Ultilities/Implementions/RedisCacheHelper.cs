using Microsoft.Extensions.Caching.Distributed;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Caching.Memory;
using Ultilities.Interfaces;
using StackExchange.Redis;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Ultilities.Implementions
{
    public class RedisCacheHelper : IRedisCacheHelper
    {
        private readonly IDistributedCache _distributedCache;
        private readonly IMemoryCache _memoryCache;
        private readonly ConnectionMultiplexer _connection;
        private readonly bool _redisActive = true;
        private readonly string _suffix;
        private readonly int _minutesCacheDefault;

        public RedisCacheHelper(
            IConfiguration configuration,
            IDistributedCache distributedCache,
            IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
            _minutesCacheDefault = int.Parse(configuration["RedisSetting:MinutesCacheDefault"]);

            if (bool.Parse(configuration["RedisSetting:IsWriteOnRedis"]))
            {
                try
                {
                    _distributedCache = distributedCache;
                    _connection = ConnectionMultiplexer.Connect(configuration["RedisSetting:RedisConfiguration"] + ",abortConnect=false");
                    _suffix = configuration["RedisSetting:RedisInstanceName"];
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }
        public async Task<T> GetAsync<T>(string key)
        {
            try
            {
                if (_redisActive)
                {
                    var result = await _distributedCache.GetStringAsync(key);
                    if (!string.IsNullOrEmpty(result))
                    {
                        return JsonConvert.DeserializeObject<T>(result);
                    }

                    return default;
                }

                return default;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task SetAsync<T>(string key, T data, TimeSpan timeSpan)
        {
            try
            {
                if (_redisActive)
                {
                    string stringData = JsonConvert.SerializeObject(data);
                    await _distributedCache.SetStringAsync(key, stringData,
                        new DistributedCacheEntryOptions
                        {
                            AbsoluteExpiration = DateTimeOffset.Now.Add(timeSpan)
                        });
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task DeleteAsync(string key)
        {
            try
            {
                if (_redisActive)
                {
                    await _distributedCache.RemoveAsync(key);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
