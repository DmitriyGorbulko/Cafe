using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class IngredientService : IIngredientService
    {
        private readonly IIngredientRepository _ingredientRepository;
        private readonly IMapper _mapper;

        public IngredientService(IIngredientRepository ingredientRepository, IMapper mapper)
        {
            _ingredientRepository = ingredientRepository;
            _mapper = mapper;
        }

        public async Task<Ingredient> Create(IngredientAddDTO ingredientAddDTO)
        {
            var ingredient = _mapper.Map<Ingredient>(ingredientAddDTO);
            return await _ingredientRepository.Create(ingredient);
        }

        public async Task Delete(int id)
        {
            await _ingredientRepository.Delete(id);
        }

        public async Task<IngredientGetDTO> Get(int id)
        {
            var ingredient = await _ingredientRepository.Get(id);
            return  _mapper.Map<IngredientGetDTO>(ingredient);
        }

        public async Task<IEnumerable<IngredientGetDTO>> GetAll()
        {
            var ingredientList = await _ingredientRepository.GetAll();
            return _mapper.Map<IEnumerable<IngredientGetDTO>>(ingredientList);
        }

        public async Task<Ingredient> Update(IngredientUpdateDTO ingredientUpdateDTO)
        {
            var ingredient = _mapper.Map<Ingredient>(ingredientUpdateDTO);
            return await _ingredientRepository.Update(ingredient);
        }
    }
}
