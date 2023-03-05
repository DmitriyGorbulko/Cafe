using Cafe.Entity;
using Cafe.Repositories.Interfaces;

namespace Cafe.Repositories.Implements
{
    public class DeliveryRepository : RepositoryBase<Delivery>, IDeliveryRepository
    {
        public DeliveryRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
