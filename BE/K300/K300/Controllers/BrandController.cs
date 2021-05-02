using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K300.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService _brandService;
        private readonly IGenericService<Brand> _genericService;

        public BrandController(IBrandService brandService, IGenericService<Brand> genericService)
        {
            _brandService = brandService;
            _genericService = genericService;
        }

        [HttpGet("get-all-brand")]
        public async Task<IActionResult> GetAllBrand()
        {
            try
            {
                var result = await _brandService.GetAllBrand();
                if(result == null || !result.Any())
                {
                    return null;
                }
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        [HttpGet("generic-get-all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _genericService.GetAll();
                if (result == null || !result.Any())
                {
                    return null;
                }
                return Ok(result.FirstOrDefault().GetType().Name);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
