using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class TableService : ITableService
    {
        private readonly ITableRepository _tableRepository;

        public TableService(ITableRepository tableRepository)
        {
            _tableRepository = tableRepository;
        }

        public async Task<Table> Create(Table table)
        {
            return await _tableRepository.Create(table);
        }

        public async Task Delete(int id)
        {
            await _tableRepository.Delete(id);
        }

        public async Task<Table> Get(int id)
        {
            return await (_tableRepository.Get(id));
        }

        public async Task<IEnumerable<Table>> GetAll()
        {
            return await _tableRepository.GetAll();
        }

        public async Task<Table> Update(Table table)
        {
            return await _tableRepository.Update(table);
        }
    }
}
