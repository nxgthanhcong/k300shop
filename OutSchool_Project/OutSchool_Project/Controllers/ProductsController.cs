using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services.IAPIServices;

namespace OutSchool_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly IAPIService _service;
        public ProductsController(IAPIService aPIService)
        {
            _service = aPIService;
        }

        [HttpGet("Test-get-count")]
        public async Task<IActionResult> Index()
        {
            var result = await _service.Test();
            return Ok(new BaseReponse<object>(result));
        }
    }
}