using Cafe.Entity;
using Cafe.Repositories.Interfaces;

namespace Cafe.Repositories.Implements
{
    public class TableRepository : RepositoryBase<Table>, ITableRepository
    {
        public TableRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
