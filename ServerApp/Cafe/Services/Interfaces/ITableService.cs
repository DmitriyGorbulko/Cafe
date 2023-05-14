using Cafe.DTO;
using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface ITableService
    {
        Task<Table> Create(Table table);

        Task<Table> Get(int id);

        Task<IEnumerable<Table>> GetAll();

        Task<Table> Update(Table table);

        Task Delete(int id);
    }
}
