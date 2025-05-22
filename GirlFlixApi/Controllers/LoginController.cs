using GirlFlixApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace GirlFlixApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly SqlService _sqlService;

        public LoginController(SqlService sqlService)
        {
            _sqlService = sqlService;
        }

    [HttpPost]
        public async Task<IActionResult> Login([FromBody] dynamic body)
        {
           string usuario = body.GetProperty("usuario").GetString();
           string contraseña = body.GetProperty("contraseña").GetString();


            var user = await _sqlService.ValidarUsuario(usuario, contraseña);

            if (user != null)
            {
                return Ok(new { success = true, message = "Login correcto" });
            }

            Console.WriteLine("Login fallido");
            return Unauthorized(new { success = false, message = "Credenciales inválidas" });

            //return Unauthorized(new { success = false, message = "Credenciales inválidas" });
        }

    }
}
