﻿using Cafe.Entity;
using Microsoft.EntityFrameworkCore;

namespace Cafe
{
    public class CafeDbContext : DbContext
    {
        public DbSet<Table> Tables { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<IngredientToDish> IngredientToDishes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<CategoryDish> CategoryDishes { get; set; }
        public DbSet<CategoryIngredient> CategoryIngredients { get; set; }
        public DbSet<TypeTable> TypeTables { get; set; }

        public CafeDbContext(DbContextOptions<CafeDbContext> options) : base(options)
        {
        }
    }
}
