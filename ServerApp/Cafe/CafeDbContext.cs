using Cafe.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Cafe
{
    public class CafeDbContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<OrderDish>()
                .HasKey(o => new { o.OrderId, o.DishId });

            builder.Entity<Dish>()
                .HasMany(t => t.Ingredients)
                .WithMany(t => t.Dishes)
                .UsingEntity<IngredientDish>(
                    j => j.HasOne(x => x.Ingredient).WithMany(x => x.IngredientDishes).HasForeignKey(x => x.IngredientId),
                    j => j.HasOne(x => x.Dish).WithMany(x => x.IngredientLinks).HasForeignKey(x => x.DishId),
                    j => j.HasKey(x => new { x.DishId, x.IngredientId })
                );
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
