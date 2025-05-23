# 🎬 GirlFlix FrontEnd & BackEnd 

*Marlene Esmeralda Aguilar*

Descripción: **GirlFlix** es una plataforma tipo streaming de peliculas y series enfocadado en mujeres, en los que puedes encontrar: kdrama, rom-com, peliculas de conciertos de artistas, peliculas de las princesa de Disney y peliculas romanticas. Permite a los usuarios iniciar sesión, explorar películas y gestionar sus favoritos y listas personalizadas con el fin de disfrutar las peliculas y series más vistas en un solo lugar.

Objetivo: Implementar la base de datos en el proyecto.

##PROYECTO:
<img width="1440" alt="Captura de pantalla 2" src="https://github.com/user-attachments/assets/f462b2f1-ecca-46ea-9884-b6ecf57cae44" />
<img width="1440" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/126f8b19-d064-4567-a6c7-f03b13428ba1" />
<img width="1440" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/b39ac1c7-8320-4d10-aa30-7cc53f44fdd5" />
<img width="1440" alt="Captura de pantalla " src="https://github.com/user-attachments/assets/d3d2e952-8dc2-4bb0-a681-0d901ca777f1" />
<img width="1440" alt="Captura de pantalla " src="https://github.com/user-attachments/assets/9488bf37-eaaf-4f29-b9b3-0b7ad53b0e0a" />

## 🔧 Cómo correr el proyecto localmente:

### 🔹 1. Clona el repositorio
### 🔹 2. Ejecutar el backend (girlflix-api) - Asegúrate de tener una base de datos corriendo en Docker o SQL Server (puerto 5270).
### 🔹 3. Ejecutar el frontend (girlflix-frontend) - Abre el navegador en: http://localhost:54800.

##Mockup Inicial
![image](https://github.com/user-attachments/assets/b909f5f1-2ba6-48ab-91d3-f4710ef5ed4f)

## 🚀 Tecnologías usadas

| Frontend           | Backend           | Base de datos      | Infraestructura |
|--------------------|-------------------|---------------------|-----------------|
| Angular 18         | ASP.NET Core 8     | SQL Server (Docker) | Azure Data Studio |
| Bootstrap          | Web API REST       | T-SQL               | Git + GitHub     |


### 🔄 Proceso de desarrollo:

1. **Desarrollé el backend en ASP.NET Core**, construyendo una API REST que valida usuarios desde una base de datos SQL.
2. **Configuré la base de datos** en SQL Server usando contenedores de Docker y Azure Data Studio para gestionarla.
3. **Implementé CORS** para permitir comunicación segura entre frontend y backend.
4. **Conecté Angular al backend** usando `HttpClient` y controlé la sesión del usuario con `localStorage`.
5. **Subí todo a GitHub** organizando el proyecto en dos carpetas (`girlflix-frontend` y `girlflix-api`).

##Modelo entidad-relación

┌─────────────┐            ┌─────────────────┐
│   Usuario   │            │    Favorito     │
├─────────────┤            ├─────────────────┤
│ Id (PK)     │◄───────────┤ UsuarioId (FK)  │
│ Usuario     │            │ PeliculaId      │
│ Contraseña  │            │ FechaAgregado   │
└─────────────┘            │ Id (PK)         │
                           └─────────────────┘

![image](https://github.com/user-attachments/assets/2d10c800-0b9f-4ed1-9f9f-e1b25eb06845)

## Mi Base de datos

<img width="1440" alt="Captura de pantalla 2025-05-23 a la(s) 1 16 15 a m" src="https://github.com/user-attachments/assets/896f3eb2-576a-4834-8cc5-74232d524872" />


## 🐞 Problemas conocidos

- 🔐 El sistema de login no usa tokens JWT, por lo que no está protegido contra manipulación del `localStorage`.
- 🔄 Actualmente no se realiza validación avanzada de contraseñas ni recuperación de cuenta.
- 🧪 Faltan pruebas unitarias y de integración tanto en el frontend como en el backend.
- 🎬 Las películas favoritas no están relacionadas con una tabla real de películas, solo se guarda un ID.
- 🖥 Al recargar la página en Angular puede perderse el estado del usuario si no se gestiona correctamente.
- 🌐 El backend y el frontend están conectados por URL fija (`localhost:5270`), lo cual dificulta el despliegue sin ajustes.

  ## 💡 Retrospectiva

### ✅ ¿Qué hice bien?
- Pude integrar correctamente Angular con una API creada en C# con ASP.NET Core.
- Utilicé Docker y Azure Data Studio para gestionar la base de datos de manera profesional.
- Subí mi proyecto completo (frontend y backend) a GitHub, con control de versiones y estructura organizada.
- Implementé login con validación contra base de datos y almacenamiento de sesión.

### ⚠️ ¿Qué no salió tan bien?
- Inicialmente tuve problemas con la configuración de CORS y los puertos entre frontend y backend.
- Subí la carpeta del frontend como un submódulo por error, lo que dificultó que GitHub mostrara su contenido.
- Tuve dificultades con la manipulación de rutas Angular al cerrar sesión o cargar estados.

### 🔁 ¿Qué puedo hacer diferente?
- Agregar pruebas automatizadas y proteger rutas sensibles desde el inicio.
- Mejorar el diseño responsivo y agregar más validaciones en formularios.





