using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Services.IAPIServices
{
    public interface IAPIService
    {
        Task<int> Test();
    }
}
