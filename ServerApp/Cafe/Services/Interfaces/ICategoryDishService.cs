
using Cafe.DTO;
using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface ICategoryDishService
    {
        Task<CategoryDish> Create(CategoryDishAddDTO categoryDishDTO);

        Task<CategoryDishGetDTO> Get(int id);

        Task<IEnumerable<CategoryDishGetDTO>> GetAll();

        Task<CategoryDish> Update(CategoryDish categoryDish);

        Task Delete(int id);
    }
}
