using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class TypeTableService : ITypeTableService
    {
        public readonly ITypeTableRepository _typeTableRepository;
        private readonly IMapper _mapper;

        public TypeTableService(ITypeTableRepository typeTableRepository, IMapper mapper)
        {
            _typeTableRepository = typeTableRepository;
            _mapper = mapper;
        }

        public async Task<TypeTable> Create(TypeTableAddDTO typeTableDTO)
        {
            var typeTable = _mapper.Map<TypeTable>(typeTableDTO);
            return await _typeTableRepository.Create(typeTable);
        }

        public async Task Delete(int id)
        {
            await _typeTableRepository.Delete(id);
        }

        public async Task<TypeTableGetDTO> Get(int id)
        {
            var typeTable = await _typeTableRepository.Get(id);
            return _mapper.Map<TypeTableGetDTO>(typeTable);
        }

        public async Task<IEnumerable<TypeTable>> GetAll()
        {
            return await _typeTableRepository.GetAll();
        }

        public async Task<TypeTable> Update(TypeTableUpdateDTO typeTableUpdateDTO)
        {
            var typeTable = await _typeTableRepository.Get(typeTableUpdateDTO.id);
            var response = _mapper.Map<TypeTableUpdateDTO, TypeTable>(typeTableUpdateDTO, typeTable);

            return await _typeTableRepository.Update(response);
        }
    }
}
