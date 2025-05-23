import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../models/pelicula.model';

@Component({
  standalone: true,
  selector: 'app-tarjeta-pelicula',
  imports: [CommonModule],
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.css']
})
export class TarjetaPeliculaComponent {
  @Input() pelicula!: Pelicula;

  toggleLike() {
    this.pelicula.like = !this.pelicula.like;
  }

  toggleFavorito() {
    this.pelicula.favorito = !this.pelicula.favorito;
  }
}
