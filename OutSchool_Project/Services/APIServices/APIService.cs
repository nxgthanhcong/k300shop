using DataAcess;
using Services.IAPIServices;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Services.APIServices
{
    public class APIService : IAPIService
    {
        public async Task<int> Test()
        {
            using (UnitOfWork uow = new UnitOfWork())
            {
                return await uow.aPIRepository.Test();
            }
        }
    }
}
