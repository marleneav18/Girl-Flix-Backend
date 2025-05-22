using GirlFlixApi.Models;
using Microsoft.Data.SqlClient;

namespace GirlFlixApi.Data
{
    public class SqlService
    {
        private readonly string _connectionString = string.Empty;

        public SqlService(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DefaultConnection")!;

        }

       public async Task<Usuario?> ValidarUsuario(string usuario, string contraseña)
{
    using var conn = new SqlConnection(_connectionString);
    await conn.OpenAsync();

    Console.WriteLine($"Verificando usuario: {usuario}, contraseña: {contraseña}");

    var query = "SELECT * FROM Usuarios WHERE Usuario = @usuario AND Contraseña = @contraseña";
    using var cmd = new SqlCommand(query, conn);
    cmd.Parameters.AddWithValue("@usuario", usuario);
    cmd.Parameters.AddWithValue("@contraseña", contraseña);

    using var reader = await cmd.ExecuteReaderAsync();
    if (await reader.ReadAsync())
    {
        Console.WriteLine("Usuario encontrado en la base de datos.");
        return new Usuario
        {
            Id = reader.GetInt32(0),
            UsuarioNombre = reader.GetString(1),
            Contraseña = reader.GetString(2)
        };
    }

    Console.WriteLine("No se encontró el usuario.");
    return null;
}

    }
}