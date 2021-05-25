using Microsoft.Extensions.Configuration;
using Models;
using Repository;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implementions
{
    public class BrandService : IBrandService
    {
        private IConfiguration _configuration;
        private readonly string _connectionString;
        public BrandService(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public async Task<IEnumerable<Brand>> GetAllBrand()
        {
            try
            {
                using (IUnitOfWork uow = new UnitOfWork(_connectionString))
                {
                    var result = await uow.BrandRepository.GetAllBrand();
                    uow.Commit();
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> AddBrand()
        {
            try
            {
                using (IUnitOfWork uow = new UnitOfWork(_connectionString))
                {
                    var result = await uow.BrandRepository.GetAllBrand();
                    uow.Commit();
                    return 1;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
