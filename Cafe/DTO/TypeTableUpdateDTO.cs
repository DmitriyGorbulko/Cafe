using AutoMapper.Configuration.Annotations;

namespace Cafe.DTO
{
    public class TypeTableUpdateDTO
    {
        public int id { get; set; }
/*
        [Ignore]
        public string Title { get; set; }*/
        public int CountPerson { get; set; }
    }
}
