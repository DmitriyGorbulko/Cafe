using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class CategoryDishService : ICategoryDishService
    {
        private readonly ICategoryDishRepository _categoryDishRepository;
        private readonly IMapper _mapper;

        public CategoryDishService(ICategoryDishRepository categoryDishRepository, IMapper mapper)
        {
            _categoryDishRepository = categoryDishRepository;
            _mapper = mapper;
        }

        public async Task<CategoryDish> Create(CategoryDishAddDTO categoryDishDTO)
        {
            var categoryDish = _mapper.Map<CategoryDish>(categoryDishDTO);
            return await _categoryDishRepository.Create(categoryDish);
        }

        public async Task Delete(int id)
        {
            await _categoryDishRepository.Delete(id);
        }

        public async Task<CategoryDishGetDTO> Get(int id)
        {
            var categoryDish = await _categoryDishRepository.Get(id);
            return _mapper.Map<CategoryDishGetDTO>(categoryDish);
        }

        public async Task<IEnumerable<CategoryDishGetDTO>> GetAll()
        {
            var categoryDishList = await _categoryDishRepository.GetAll();
            return _mapper.Map<IEnumerable<CategoryDishGetDTO>>(categoryDishList.OrderBy(x => x.Id));
        }

        public async Task<CategoryDish> Update(CategoryDish categoryIngredient)
        {
            return await _categoryDishRepository.Update(categoryIngredient);
        }
    }
}
