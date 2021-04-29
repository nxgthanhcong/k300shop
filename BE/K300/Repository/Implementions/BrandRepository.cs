using Models;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Implementions
{
    public class BrandRepository : BaseRepository, IBrandRepository
    {
        public BrandRepository(IDbTransaction transaction) : base(transaction) { }

        public async Task<IEnumerable<Brand>> GetAllBrand()
        {
            return await QueryAsync<Brand>("sp_GetAllBrand", new { 
            
            });
        }
    }
}
