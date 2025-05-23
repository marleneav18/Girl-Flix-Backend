import { Component } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  peliculasFavoritas: Pelicula[] = [];

  agregarAFavoritos(pelicula: Pelicula) {
    // Si la película ya está en favoritos, no la agregamos
    if (!this.peliculasFavoritas.find(p => p.id === pelicula.id)) {
      this.peliculasFavoritas.push(pelicula);
    }
  }

  eliminarDeFavoritos(pelicula: Pelicula) {
    const index = this.peliculasFavoritas.findIndex(p => p.id === pelicula.id);
    if (index !== -1) {
      this.peliculasFavoritas.splice(index, 1);
    }
  }
}
