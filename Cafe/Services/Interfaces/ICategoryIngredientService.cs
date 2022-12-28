using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface ICategoryIngredientService
    {
        Task<CategoryIngredient> Create(CategoryIngredient categoryIngredient);

        Task<CategoryIngredient> Get(int id);
        
        Task<IEnumerable<CategoryIngredient>> GetAll();

        Task<CategoryIngredient> Update(CategoryIngredient categoryIngredient);

        Task Delete(int id);
    }
}
