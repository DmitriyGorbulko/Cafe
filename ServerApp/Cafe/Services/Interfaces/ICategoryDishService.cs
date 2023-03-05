
using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface ICategoryDishService
    {
        Task<CategoryDish> Create(CategoryDish categoryDish);

        Task<CategoryDish> Get(int id);

        Task<IEnumerable<CategoryDish>> GetAll();

        Task<CategoryDish> Update(CategoryDish categoryDish);

        Task Delete(int id);
    }
}
