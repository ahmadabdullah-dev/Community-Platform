using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DataAccess
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddDataAccess(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(opt =>
            {
                opt.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });
            services.AddIdentityCore<AppUser>(opt =>
            {
                opt.User.RequireUniqueEmail = true;

            }).AddRoles<AppRole>()
              .AddEntityFrameworkStores<ApplicationDbContext>();

            return services;
        }
    }
}
