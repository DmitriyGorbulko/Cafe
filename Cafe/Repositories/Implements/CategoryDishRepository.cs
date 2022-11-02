using Cafe.Entity;
using Cafe.Repositories.Interfaces;

namespace Cafe.Repositories.Implements
{
    public class CategoryDishRepository : RepositoryBase<CategoryDish>, ICategoryDishRepository
    {
        public CategoryDishRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
