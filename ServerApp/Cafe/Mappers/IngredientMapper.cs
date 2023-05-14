using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class IngredientMapper : Profile
    {
        public IngredientMapper()
        {
            CreateMap<IngredientAddDTO, Ingredient>();
            CreateMap<Ingredient, IngredientGetDTO>();
            CreateMap<IngredientUpdateDTO, Ingredient>()
                .ForMember(x => x.Id, opt => opt.MapFrom(y => y.id))
                .ForMember(x => x.Description, opt => opt.MapFrom(y => y.Description))
                .ForAllMembers(x => x.Ignore());
        }
    }
}
