export interface Pelicula {
    id: number;
    titulo: string;
    imagen: string;
    descripcion: string;
    like?: boolean;
    favorito?: boolean;
}  
// Esta interfaz define la estructura de un objeto Pelicula, que incluye propiedades como id, titulo, imagen y descripcion.
// Las propiedades like y favorito son opcionales y se utilizan para indicar si la película ha sido marcada como favorita o le gusta.