using Cafe.DTO;
using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface IDishService
    {
        Task<Dish> Create(DishAddDTO dish);

        Task<DishGetDTO> Get(int id);

        Task<IEnumerable<Dish>> GetAll();

        Task<Dish> Update(DishUpdateDTO dish);

        Task Delete(int id);

        Task<IEnumerable<DishGetDTO>> GetDishByCategoryId(int id);
    }
}
