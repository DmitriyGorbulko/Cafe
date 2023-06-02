using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers;

public class IngredientMapper  : Profile
{
    public IngredientMapper()
    {
        CreateMap<Ingredient, IngredientGetDTO>()
            .ForMember(x => x.Id, opt => opt.MapFrom(y => y.Id))
            .ForMember(x => x.Title, opt => opt.MapFrom(y => y.Title))
            .ForAllOtherMembers(x => x.Ignore());
    }

    
}
