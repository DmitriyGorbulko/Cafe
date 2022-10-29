using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class CategoryIngredientRepository : ICategoryIngredientRepository
    {
        private readonly CafeDbContext _context;

        public CategoryIngredientRepository(CafeDbContext context)
        {
            _context = context;
        }

        public async Task<CategoryIngredient> Create(CategoryIngredient categoryIngredient)
        {
            await _context.CategoryIngredients.AddAsync(categoryIngredient);
            await _context.SaveChangesAsync();
            return categoryIngredient;
        }

        public async Task Delete(int id)
        {
            var categiryIngredientDelete = await _context.CategoryIngredients.FindAsync(id);
            _context.CategoryIngredients.Remove(categiryIngredientDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<CategoryIngredient> Get(int id)
        {
            return await _context.CategoryIngredients.FindAsync(id);
        }

        public async Task<IEnumerable<CategoryIngredient>> GetAll()
        {
            return await _context.CategoryIngredients.ToListAsync();
        }

        public async Task<CategoryIngredient> Update(CategoryIngredient categoryIngredient)
        {
            var categiryIngredientUpdate = await _context.CategoryIngredients.FindAsync(categoryIngredient.Id);
            categiryIngredientUpdate.Title = categoryIngredient.Title;
            await _context.SaveChangesAsync();
            return categiryIngredientUpdate;
        }
    }
}
