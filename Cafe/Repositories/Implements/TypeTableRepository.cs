using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class TypeTableRepository : ITypeTableRepository
    {
        private readonly CafeDbContext _context;
        
        public TypeTableRepository(CafeDbContext context)
        {
            _context = context;
        }

        public async Task<TypeTable> Create(TypeTable typeTable)
        {
            await _context.AddAsync(typeTable);
            await _context.SaveChangesAsync();
            return typeTable;
        }

        public async Task Delete(int id)
        {
            var typeTableDelete = await _context.TypeTables.FindAsync(id);
            _context.TypeTables.Remove(typeTableDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<TypeTable> Get(int id)
        {
            return await _context.TypeTables.FindAsync(id);
        }

        public async Task<IEnumerable<TypeTable>> GetAll()
        {
            return await _context.TypeTables.ToListAsync();
        }

        public async Task<TypeTable> Update(TypeTable typeTable)
        {
            var typeTableUpdate = await Get(typeTable.Id);
            typeTableUpdate.Title = typeTable.Title;
            await _context.SaveChangesAsync();
            return typeTableUpdate;
        }
    }
}
