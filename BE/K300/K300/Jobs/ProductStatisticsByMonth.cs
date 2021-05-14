using Quartz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K300.Jobs
{
    public class ProductStatisticsByMonth : IJob
    {
        public async Task Execute(IJobExecutionContext context)
        {
            try
            {
                Console.WriteLine("Job run at: " + DateTime.Now.Second);
                await Task.Delay(7000);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
