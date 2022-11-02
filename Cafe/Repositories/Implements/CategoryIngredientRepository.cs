using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class CategoryIngredientRepository : RepositoryBase<CategoryIngredient>, ICategoryIngredientRepository
    {
        public CategoryIngredientRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
