using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ultilities.Implementions;
using Ultilities.Interfaces;

namespace K300.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IGenericService<Brand> _brandService;
        private readonly IRedisCacheHelper _redisCacheHelper;
        private readonly ISendMailHelper _sendMailHelper;
        private readonly IElastichsearchHelper _elastichsearchHelper;

        public BrandController(
            IGenericService<Brand> brandService,
            IRedisCacheHelper redisCacheHelper,
            ISendMailHelper sendMailHelper,
            IElastichsearchHelper elastichsearchHelper)
        {
            _brandService = brandService;
            _elastichsearchHelper = elastichsearchHelper;
            _redisCacheHelper = redisCacheHelper;
            _sendMailHelper = sendMailHelper;
        }

        [HttpGet("get-all-brand")]
        public async Task<IActionResult> GetAllBrand()
        {
            try
            {
                //check data cache
                //string key = $"GetAllBrand_{DateTime.Now.Date}_";
                //var dataCache = await _redisCacheHelper.GetAsync<IEnumerable<Brand>>(key);
                //if (dataCache != null)
                //{
                //    return Ok(dataCache);
                //}
                //if no data cache > go query database
                var result = await _brandService.GetAll();
                if(result == null || !result.Any())
                {
                    return null;
                }
                //if has data > save to cache
                //await _redisCacheHelper.SetAsync(key, result, TimeSpan.FromDays(1));

                //await _sendMailHelper.SendMail();

                Exception ex = new Exception("test loi");
                _elastichsearchHelper.UpErrorToElasticSeearch(ex, new { });
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        
        [HttpPost("update-brand")]
        public async Task<IActionResult> UpdateBrand(Brand brand)
        {
            try
            {
                var result = await _brandService.UpdateBrand(brand);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpPost("add-brand")]
        public async Task<IActionResult> AddBrand(Brand brand)
        {
            try
            {
                var result = await _brandService.AddBrand(brand);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
