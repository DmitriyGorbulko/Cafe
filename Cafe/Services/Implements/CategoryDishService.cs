using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class CategoryDishService : ICategoryDishService
    {
        private readonly ICategoryDishRepository _categoryDishRepository;
        public CategoryDishService(ICategoryDishRepository categoryDishRepository)
        {
            _categoryDishRepository = categoryDishRepository;
        }

        public async Task<CategoryDish> Create(CategoryDish categoryDish)
        {
            return await _categoryDishRepository.Create(categoryDish);
        }

        public async Task Delete(int id)
        {
            await _categoryDishRepository.Delete(id);
        }

        public async Task<CategoryDish> Get(int id)
        {
            return await _categoryDishRepository.Get(id);
        }

        public async Task<IEnumerable<CategoryDish>> GetAll()
        {
            return await _categoryDishRepository.GetAll();
        }

        public async Task<CategoryDish> Update(CategoryDish categoryIngredient)
        {
            return await _categoryDishRepository.Update(categoryIngredient);
        }
    }
}
