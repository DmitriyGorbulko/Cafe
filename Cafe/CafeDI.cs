using Cafe.Repositories.Implements;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Implements;
using Cafe.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Cafe
{
    public static class CafeDI
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            return services
                .AddScoped<ITypeTableRepository, TypeTableRepository>()
                .AddScoped<ICategoryIngredientRepository, CategoryIngredientRepository>();
        }

        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            return services
                .AddScoped<ITypeTableService, TypeTableService>()
                .AddScoped<ICategoryIngredientService, CategoryIngredientService>();
        }
    }
}
