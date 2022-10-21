using Cafe.Entity;
using Microsoft.EntityFrameworkCore;

namespace Cafe
{
    public class CafeDbContext : DbContext
    {
        DbSet<Table> Tables { get; set; }
        DbSet<Delivery> Deliveries { get; set; }
        DbSet<Dish> Dishes { get; set; }
        DbSet<Ingredient> Ingredients { get; set; }
        DbSet<IngredientToDish> IngredientToDishes { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<Role> Roles { get; set; }
        DbSet<CategoryDish> categoryDishes { get; set; }
        DbSet<CategoryIngredient> categoryIngredients { get; set; }

        public CafeDbContext(DbContextOptions<CafeDbContext> options) : base(options)
        {
        }
    }
}
