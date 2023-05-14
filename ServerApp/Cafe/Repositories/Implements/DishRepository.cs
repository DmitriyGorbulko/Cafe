using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class DishRepository : RepositoryBase<Dish>, IDishRepository
    {
        private readonly CafeDbContext _context;

        public DishRepository(CafeDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Dish>> GetDishByCategoryId(int id)
        {
            return await _context.Dishes.Where(d => d.CategoryDishId == id).ToListAsync();
        }
    }   
}
