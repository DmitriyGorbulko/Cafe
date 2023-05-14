using Cafe.DTO;
using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface IIngredientService
    {
        Task<Ingredient> Create(IngredientAddDTO ingredientAddDTO);
        Task<IngredientGetDTO> Get(int id);
        Task<IEnumerable<IngredientGetDTO>> GetAll();
        Task<Ingredient> Update(IngredientUpdateDTO ingredientUpdateDTO);
        Task Delete(int id);
    }
}
