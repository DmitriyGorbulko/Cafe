using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Net.Http.Headers;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using System.Threading;
using System;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using System.Text.Encodings.Web;

namespace Cafe.Middleware
{
    public class CafeAuthenticationHandler : AuthenticationHandler<JwtBearerOptions>
    {
        public CafeAuthenticationHandler(IOptionsMonitor<JwtBearerOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock) : base(options, logger, encoder, clock)
        {
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            CancellationToken cancellationToken = Context.RequestAborted;
            if (!Request.Headers.ContainsKey(HeaderNames.Authorization))
            {
                return AuthenticateResult.Fail("Invalid Token Header");
            }

            var token = Request.Headers[HeaderNames.Authorization].ToString().Split(" ")[1];

            var handler = new JwtSecurityTokenHandler();

            try
            {
                handler.ValidateToken(token, Options.TokenValidationParameters, out _);
            }
            catch (Exception)
            {
                return AuthenticateResult.Fail("Invalid Token");
            }

            var jwtSecurityToken = handler.ReadJwtToken(token);



            var identity = new ClaimsIdentity(jwtSecurityToken.Claims, Scheme.Name);
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);

            return await Task.FromResult(AuthenticateResult.Success(ticket));
        }
    }
}
