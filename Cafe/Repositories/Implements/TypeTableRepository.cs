using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class TypeTableRepository : RepositoryBase<TypeTable>, ITypeTableRepository
    {
        public TypeTableRepository(CafeDbContext context) : base(context)
        {
        }
    }
}
