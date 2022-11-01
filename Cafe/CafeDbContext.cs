using Cafe.Entity;
using Microsoft.EntityFrameworkCore;

namespace Cafe
{
    public class CafeDbContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<OrderDish>()
                .HasKey(o => new { o.OrderId, o.DishId });
            builder.Entity<IngredientDish>()
                .HasKey(i => new { i.DishId, i.IngredientId });
        }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<IngredientDish> IngredientToDishes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<CategoryDish> CategoryDishes { get; set; }
        public DbSet<CategoryIngredient> CategoryIngredients { get; set; }
        public DbSet<TypeTable> TypeTables { get; set; }
        public DbSet<Person> Persons { get; set; }

        public CafeDbContext(DbContextOptions<CafeDbContext> options) : base(options)
        {
        }

        public int MyProperty { get; set; }
    }
}
