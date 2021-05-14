using Models.BaseModel;
using Nest;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Ultilities.Implementions;

namespace Ultilities.Interfaces
{
    public class ElastichsearchHelper : IElastichsearchHelper
    {
        private readonly IElasticClient _elasticClient;
        public ElastichsearchHelper(IElasticClient elasticClient)
        {
            _elasticClient = elasticClient;
        }
        public async void UpErrorToElasticSeearch(Exception ex, object obj, [CallerMemberName] string callerName = "")
        {
            var log = new LoggerInternal()
            {
                TypeLog = "Error",
                Package = GetType().Namespace,
                ClassName = GetType().Name,
                ErrorMethod = callerName,
                Parameters = JsonConvert.SerializeObject(obj),
                ErrorMessage = JsonConvert.SerializeObject(ex),
                DateTime = DateTime.Now
            };
            await _elasticClient.IndexDocumentAsync(log);
        }
    }
}
