using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Implementions
{
    public class GenericRepository<T> : BaseRepository, IGenericRepository<T>
    {
        public GenericRepository(IDbTransaction dbTransaction) : base(dbTransaction)
        {

        }        
        public async Task<IEnumerable<T>> GetAll()
        {
            try
            {
                var result = await QueryAsync<T>("sp_GetAllBrand", new
                {

                });
                return result;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
