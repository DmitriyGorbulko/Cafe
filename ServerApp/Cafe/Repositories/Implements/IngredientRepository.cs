using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class IngredientRepository : RepositoryBase<Ingredient>, IIngredientRepository
    {
        private readonly CafeDbContext _context;

        public IngredientRepository(CafeDbContext context) : base(context)
        {
            _context = context;
        }

        

        public async Task<IEnumerable<Ingredient>> GetIngridientsByCategoryIngredient(int id)
        {
            return await _context.Ingredients.Where(i => i.CategoryIngredientId == id).ToListAsync();
        }
    }
}
