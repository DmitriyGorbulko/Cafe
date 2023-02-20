using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class TypeTableMapper : Profile
    {
        public TypeTableMapper()
        {
            CreateMap<TypeTable, TypeTableGetDTO>();
            CreateMap<TypeTableAddDTO, TypeTable>();
            CreateMap<TypeTableUpdateDTO, TypeTable>()
                .ForMember(x => x.Id, opt => opt.MapFrom(y => y.id))
                .ForMember(x => x.CountPerson, opt => opt.MapFrom(y => y.CountPerson))
                .ForAllMembers(x => x.Ignore());/*
            CreateMap<TypeTable, TypeTableUpdateDTO>();*/
        }
    }
}
