using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class CategoryIngredientService : ICategoryIngredientService
    {
        private readonly ICategoryIngredientRepository _categoryIngredientRepository;
        
        public CategoryIngredientService(ICategoryIngredientRepository categoryIngredientRepository, IMapper mapper)
        {
            _categoryIngredientRepository = categoryIngredientRepository;
        }

        public async Task<CategoryIngredient> Create(CategoryIngredient categoryIngredient)
        {
            
            return await _categoryIngredientRepository.Create(categoryIngredient);
        }

        public async Task Delete(int id)
        {
            await _categoryIngredientRepository.Delete(id);
        }

        public async Task<CategoryIngredient> Get(int id)
        {
            return await _categoryIngredientRepository.Get(id);
        }

        public async Task<IEnumerable<CategoryIngredient>> GetAll()
        {
            return await _categoryIngredientRepository.GetAll();
        }

        public async Task<CategoryIngredient> Update(CategoryIngredient categoryIngredient)
        {
            return await _categoryIngredientRepository.Update(categoryIngredient);
        }
    }
}
