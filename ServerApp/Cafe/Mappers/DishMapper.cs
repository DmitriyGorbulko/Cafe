﻿using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class DishMapper : Profile
    {
        public DishMapper()
        {
            CreateMap<Dish, DishGetDTO>();
            CreateMap<DishAddDTO, Dish>();
            CreateMap<DishUpdateDTO, Dish>()
                .ForMember(x => x.Id, opt => opt.MapFrom(y => y.id))
                .ForMember(x => x.Description, opt => opt.MapFrom(y => y.Description))
                .ForMember(x => x.Recipe, opt => opt.MapFrom(y => y.Recipe))
                .ForAllMembers(x => x.Ignore());
        }
    }
}