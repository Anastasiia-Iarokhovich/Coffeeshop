using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Services;
using Microsoft.EntityFrameworkCore;

namespace api.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config) 
        {
            //strn + shift + l - see maches
            services.AddControllers();

            services.AddDbContext<ApplicationDbContext>(options => {
                options.UseNpgsql(config.GetConnectionString("DefaultConnection"));
                //b => b.MigrationsAssembly("api.Data"));
            });

            services.AddCors();

            services.AddScoped<ITokenService, TokenService>();

            return services;

        }
    }
}