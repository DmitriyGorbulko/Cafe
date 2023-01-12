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
                .AddScoped<ICategoryIngredientRepository, CategoryIngredientRepository>()
                .AddScoped<ICategoryDishRepository, CategoryDishRepository>()
                .AddScoped<IDeliveryRepository, DeliveryRepository>()
                .AddScoped<IDishRepository, DishRepository>()
                .AddScoped<IIngredientRepository, IngredientRepository>()
                .AddScoped<IOrderRepository, OrderRepository>()
                .AddScoped<ITableRepository, TableRepository>();
        }

        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            return services
                .AddScoped<ITypeTableService, TypeTableService>()
                .AddScoped<ICategoryIngredientService, CategoryIngredientService>()
                .AddScoped<IDishService, DishService>()
                .AddScoped<ICategoryDishService, CategoryDishService>();
        }
    }
}
