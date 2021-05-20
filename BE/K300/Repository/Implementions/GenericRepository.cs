using Models;
using Newtonsoft.Json;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Implementions
{
    public class GenericRepository<T> : BaseRepository, IGenericRepository<T> where T : class
    {
        public GenericRepository(IDbTransaction dbTransaction) : base(dbTransaction)
        {

        }        
        public async Task<IEnumerable<T>> GetAll()
        {
            try
            {
                var result = await QueryAsync<T>("[sp_GetAll]", new
                {
                    @className = typeof(T).Name
                });
                return result;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> UpdateBrand(Brand brand)
        {
            try
            {
                var result = await ExecuteAsync("[sp_ModifyBrand]", new
                {
                    @id = brand.Id,
                    @description = brand.Description,
                    @name = brand.Name,
                    @isActived = brand.IsActived
                });
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> AddBrand(Brand brand)
        {
            try
            {
                var result = await ExecuteAsync("[sp_AddBrand]", new
                {
                    @description = brand.Description,
                    @name = brand.Name,
                });
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<IEnumerable<T>> SearchBrand(Brand brand)
        {
            try
            {
                var result = await QueryAsync<T>("[sp_SearchBrand]", new
                {
                    @name = brand.Name,
                });
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
