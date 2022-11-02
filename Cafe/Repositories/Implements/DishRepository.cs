using Cafe.Entity;
using Cafe.Repositories.Interfaces;

namespace Cafe.Repositories.Implements
{
    public class DishRepository : RepositoryBase<Dish>, IDishRepository
    {
        public DishRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
