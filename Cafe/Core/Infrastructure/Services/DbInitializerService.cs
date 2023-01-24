using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Cafe.Core.Infrastructure.Services
{
    public partial class DbInitializerService : IDbInitializerService
    {
        private readonly ILogger<DbInitializerService> _logger;
        private readonly IServiceScopeFactory _serviceScopeFactory;

        public DbInitializerService(ILogger<DbInitializerService> logger, IServiceScopeFactory serviceScopeFactory)
        {
            _logger = logger;
            _serviceScopeFactory = serviceScopeFactory;
        }

        public async Task InitializeAsync()
        {
            _logger.LogInformation("Migrating database");
            using var scope = _serviceScopeFactory.CreateScope();
            await using var dbContext = scope.ServiceProvider.GetRequiredService<CafeDbContext>();
            await dbContext.Database.MigrateAsync();
            _logger.LogInformation("Database migrated");
        }
        
    }
}
