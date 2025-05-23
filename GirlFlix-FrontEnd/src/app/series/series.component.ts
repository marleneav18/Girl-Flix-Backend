import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../models/pelicula.model';
import { TarjetaPeliculaComponent } from '../tarjeta-pelicula/tarjeta-pelicula.component';

@Component({
  standalone: true,
  selector: 'app-peliculas',
  imports: [CommonModule, TarjetaPeliculaComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  peliculas: Pelicula[] = [
    {
      id: 3,
      titulo: "The Summer I Turned Pretty",
      imagen: "assets/images/theSummer.png",
      descripcion: "Una serie de amor adolescente de una chica que pasa sus veranos en una casa de playa.",
    },
    {
      id: 5,
      titulo: "To All The Boys I've Loved Before",
      imagen: "assets/images/toAllBoys.jpg",
      descripcion: "Una comedia romántica sobre una chica cuyas cartas de amor secretas son enviadas.",
    },
    {
      id: 7,
      titulo: "Love Alarm",
      imagen: "assets/images/loveAlarm.webp",
      descripcion: "Una serie que explora el amor y la tecnología a través de una aplicación.",
    },
    {
      id: 12,
      titulo: "Something In The Rain",
      imagen: "assets/images/something.jpg",
      descripcion: "Una serie que sigue la historia de amor entre una mujer mayor y un hombre más joven.",
    }
  ];
}
