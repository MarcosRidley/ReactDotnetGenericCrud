using GenericFullstackApp.Models.Entities;
using GenericFullstackApp.Server.Repositories;
using GenericFullstackApp.Server.Repositories.Base;
using GenericFullstackApp.Server.Repositories.Interface;
using GenericFullstackApp.Server.Services;
using Microsoft.EntityFrameworkCore;

namespace GenericFullstackApp.Server.Configuration
{
    public class InversionOfControl
    {
        public static void ConfigureInjections(IServiceCollection services, string connectionString)
        {
            #region [Common]
            services.AddDbContext<MyDbContext>(options => options.UseSqlServer(connectionString));
            #endregion

            #region AutoMapper

            services.AddAutoMapper(typeof(AutoMapperConfig));

            #endregion

            #region [Repositories]

                #region Company
                services.AddScoped<IRepository<Company>, CompanyRepository>();
                #endregion

            #endregion

            #region [Services]

                #region Company
                services.AddScoped<CompanyService>();
                #endregion

            #endregion
        }
    }
}
