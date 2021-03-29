using DataAcess.Repositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcess.Implementions
{
    public class APIRepository : BaseRepository, IAPIRepository
    {
        public APIRepository(IDbTransaction dbTransaction) : base(dbTransaction)
        {

        }

        public async Task<int> Test()
        {
            var result = await QueryAsync<int>("Test", new { });
            return result.FirstOrDefault();
        }
    }
}
