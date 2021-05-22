using Quartz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K300.Jobs
{
    public class JobScheduler
    {
        public readonly IScheduler _scheduler;
        public JobScheduler(IScheduler scheduler)
        {
            _scheduler = scheduler;
        }
        public void Start()
        {
            IJobDetail job = JobBuilder.Create<ProductStatisticsByMonth>()
                .Build();
            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                (s =>
                    s.WithIntervalInSeconds(5)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(8, 24))
                )
                //.WithCronSchedule("0/10 39 6-21 ? * * *")
                .Build();
            _scheduler.ScheduleJob(job, trigger);
        }
    }
}
