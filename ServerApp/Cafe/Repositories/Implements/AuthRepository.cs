using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Cafe.Repositories.Implements
{
    public class AuthRepository : IAuthRepository
    {
        private readonly CafeDbContext _context;
        public AuthRepository(CafeDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Register(Person person, string password)
        {
            if (await UserExists(person.Email))
            {
                return false;
            }

            CreatePasswordHash(password, out byte[] passwordHash, out byte[] passwordSalt);

            person.PasswordHash = passwordHash;
            person.PasswordSalt = passwordSalt;

            await _context.Persons.AddAsync(person);
            await _context.SaveChangesAsync();
            
            return true;         
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using var hmac = new System.Security.Cryptography.HMACSHA512();
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }

        public async Task<bool> UserExists(string email)
        {
            return await _context.Persons.AnyAsync(x => x.Email.ToLower() == email.ToLower());
        }


    }
}
