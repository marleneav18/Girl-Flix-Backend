namespace GirlFlixApi.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string UsuarioNombre { get; set; } = string.Empty;
        public string Contraseña { get; set; } = string.Empty;
    }
}
