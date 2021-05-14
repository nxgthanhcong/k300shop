using Microsoft.Extensions.Configuration;
using Models;
using Repository;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implementions
{
    public class GenericService<T> : IGenericService<T> where T : class
    {
        private IConfiguration _configuration;
        private readonly string _connectionString;
        public GenericService(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public async Task<IEnumerable<T>> GetAll()
        {
            try
            {
                using (IUnitOfWork<T> uow = new UnitOfWork<T>(_connectionString))
                {
                    var result = await uow.GenericRepository.GetAll();
                    uow.Commit();
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> UpdateBrand(Brand brand)
        {
            try
            {
                using (IUnitOfWork<T> uow = new UnitOfWork<T>(_connectionString))
                {
                    var result = await uow.GenericRepository.UpdateBrand(brand);
                    uow.Commit();
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
