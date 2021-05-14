using K300.Jobs;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Models.BaseModel;
using Nest;
using Quartz;
using Quartz.Impl;
using Services.Implementions;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using Ultilities.Implementions;
using Ultilities.Interfaces;

namespace K300
{
    public class Startup
    {
        readonly string _myCors = "cors1";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddScoped(typeof(IGenericService<>), typeof(GenericService<>));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Version = "v1",
                    Title = "K300 API",
                    Description = "Death is like a wind, alway by my side :D"
                });
            });
            services.AddCors(options =>
            {
                options.AddPolicy(name: _myCors,
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });
            services.AddElastichSearch(Configuration);
            services.AddSingleton<IScheduler>(ConfigureQuartz(services));

            services.AddDistributedMemoryCache();
            services.AddDistributedRedisCache(option =>
            {
                option.Configuration = Configuration["RedisSetting:RedisConfiguration"];
                option.InstanceName = Configuration["RedisSetting:RedisInstanceName"];
            });
            services.AddScoped<IRedisCacheHelper, RedisCacheHelper>();
            services.AddScoped<ISendMailHelper, SendMailHelper>();
            services.AddMemoryCache();
        }
        public IScheduler ConfigureQuartz(IServiceCollection services)
        {
            NameValueCollection props = new NameValueCollection()
            {
                ["quartz.serializer.type"] = "binary"
            };
            StdSchedulerFactory factory = new StdSchedulerFactory(props);
            var scheduler = factory.GetScheduler().Result;
            new JobScheduler(scheduler).Start();
            //scheduler.Start().Wait();
            return scheduler;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "K300 API");
            });

            app.UseCors(_myCors);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
    public static class ElasticsearchExtensions
    {
        public static void AddElastichSearch(this IServiceCollection services, IConfiguration configuration)
        {
            var url = configuration["elasticsearch:url"];
            var defaultIndex = configuration["elasticsearch:index"];
            var setting = new ConnectionSettings(new Uri(url)).DefaultIndex(defaultIndex);
            var client = new ElasticClient(setting);
            services.AddSingleton<IElasticClient>(client);
        }
    }
}
