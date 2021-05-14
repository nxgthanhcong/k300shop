using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Ultilities.Interfaces
{
    public interface IRedisCacheHelper
    {
        Task<T> GetAsync<T>(string key);
        Task SetAsync<T>(string key, T data, TimeSpan timeSpan);
        Task DeleteAsync(string key);
    }
}
