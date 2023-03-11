using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Cafe
{
    public class AuthOptions
    {
        public const string ISSUER = "Cafe"; // издатель токена
        public const string AUDIENCE = "Cafe"; // потребитель токена
        const string KEY = "mysupersecret_secretkey!123";   // ключ для шифрации
        public static SymmetricSecurityKey GetSymmetricSecurityKey() =>
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
    }
}
