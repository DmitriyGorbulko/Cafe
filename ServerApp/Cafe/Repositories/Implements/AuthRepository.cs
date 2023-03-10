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

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        public async Task<bool> Login(string email, string password)
        {
            var response = true;
            var person = await _context.Persons.FirstOrDefaultAsync(x => x.Email.ToLower().Equals(email.ToLower()));
            if (person == null)
            {
                response = false;
            }
            else if (!VerifyPasswordHash(password, person.PasswordHash, person.PasswordSalt))
            {
                response = false;
            }

            return response;
        }

    }
}
