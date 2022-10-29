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

        public TypeTableService(ITypeTableRepository typeTableRepository)
        {
            _typeTableRepository = typeTableRepository;
        }

        public async Task<TypeTable> Create(TypeTable typeTable)
        {
            return await _typeTableRepository.Create(typeTable);
        }

        public async Task Delete(int id)
        {
            await _typeTableRepository.Delete(id);
        }

        public async Task<TypeTable> Get(int id)
        {
            return await _typeTableRepository.Get(id);
        }

        public async Task<IEnumerable<TypeTable>> GetAll()
        {
            return await _typeTableRepository.GetAll();
        }

        public async Task<TypeTable> Update(TypeTable typeTable)
        {
            return await _typeTableRepository.Update(typeTable);
        }
    }
}
