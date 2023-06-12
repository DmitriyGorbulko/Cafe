using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.OAuth;
using System.Collections.Generic;

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
            passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
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

        public async Task<string> Login(string email, string password)
        {
            var response = "false";
            var person = await _context.Persons.FirstOrDefaultAsync(x => x.Email.ToLower().Equals(email.ToLower()));
            if (person == null)
            {
                return response;
            }
            else if (!VerifyPasswordHash(password, person.PasswordHash, person.PasswordSalt))
            {
                return response;
            }

            response = CreateToken(await _context.Persons.FirstOrDefaultAsync(x => x.Email == email));
            return response;
        }

        private string CreateToken(Person person)
        {
            const int ExpirationMinutes = 30;

            /*var role = await _context.Roles.FindAsync(person.RoleId);*/
            var claims = new List<Claim> {
                new Claim(ClaimTypes.Email, person.Email),
                new Claim(ClaimTypes.Role, "admin")
            };
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    expires: DateTime.UtcNow.AddMinutes(ExpirationMinutes), // время действия 30 минуты
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            return new JwtSecurityTokenHandler().WriteToken(jwt);

        }

    }
}
