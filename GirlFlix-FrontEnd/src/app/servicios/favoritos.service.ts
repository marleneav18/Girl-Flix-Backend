import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService{
  private peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: "Taylor Swift: The Eras Tour",
      imagen: "assets/images/taylor.jpg",
      descripcion: "Un viaje a través de la carrera de Taylor Swift.",
    },
   
  ];

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  toggleFavorito(id: number): void {
    const pelicula = this.peliculas.find(p => p.id === id);
    if (pelicula) {
      pelicula.favorito = !pelicula.favorito;
    }
  }

  getFavoritos(): Pelicula[] {
    return this.peliculas.filter(p => p.favorito);
  }
}
