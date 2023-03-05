using Cafe.Entity;
using Cafe.Repositories.Interfaces;

namespace Cafe.Repositories.Implements
{
    public class IngredientRepository : RepositoryBase<Ingredient>, IIngredientRepository
    {
        public IngredientRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
