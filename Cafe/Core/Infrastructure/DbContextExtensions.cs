using System.Threading.Tasks;
using Cafe.Core.Infrastructure.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Cafe.Core.Infrastructure
{
    public static class DbContextExtensions
    {
        public static async Task InitializeDatabaseAsync(this IApplicationBuilder applicationBuilder)
        {
            var serviceScopeFactory = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            using var scope = serviceScopeFactory.CreateScope();
            var initializer = scope.ServiceProvider.GetRequiredService<IDbInitializerService>();
            await initializer.InitializeAsync();
        }
    }
}
