using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface IIngredientRepository : IRepositoryBase<Ingredient>
    {
        Task<IEnumerable<Ingredient>> GetIngridientsByCategoryIngredient(int id);
    }
}
