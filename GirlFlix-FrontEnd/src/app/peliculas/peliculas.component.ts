import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../models/pelicula.model';
import { TarjetaPeliculaComponent } from '../tarjeta-pelicula/tarjeta-pelicula.component';

@Component({
  standalone: true,
  selector: 'app-peliculas',
  imports: [CommonModule, TarjetaPeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: "Taylor Swift: The Eras Tour",
      imagen: "assets/images/taylor.jpg",
      descripcion: "Un viaje a través de la carrera de Taylor Swift, desde sus inicios hasta su éxito actual.",
    },
    {
      id: 2,
      titulo: "Blanca Nieves",
      imagen: "assets/images/blancaNieves.jpeg",
      descripcion: "La historia de Blanca Nieves, una princesa que se enfrenta a la malvada reina.",
    },
    {
      id: 3,
      titulo: "Aladin",
      imagen: "assets/images/aladin.jpg",
      descripcion: "La historia de un joven que encuentra una lámpara mágica y se convierte en príncipe.",
    },
    {
      id: 4,
      titulo: "To All The Boys I've Loved Before",
      imagen: "assets/images/toAllBoys.jpg",
      descripcion: "Una comedia romántica sobre una chica cuyas cartas de amor secretas son enviadas.",
    },
    {
      id: 5,
      titulo: "Anyone But You",
      imagen: "assets/images/anyoneButYou.jpeg",
      descripcion: "Una comedia romántica que sigue a dos personas que se odian pero están destinadas a estar juntas.",
    },
    {
      id: 6,
      titulo: "La Sirenita",
      imagen: "assets/images/lasirenita.jpg",
      descripcion: "La historia de Ariel, una sirena que sueña con convertirse en humana.",
    },
    {
      id: 7,
      titulo: "Encantada",
      imagen: "assets/images/encantada.jpg",
      descripcion: "Una princesa de un mundo de cuentos de hadas es transportada a la ciudad de Nueva York.",
    },
    {
      id: 8,
      titulo: "Enredados",
      imagen: "assets/images/enredados.jpg",
      descripcion: "La historia de Rapunzel, una joven con un cabello mágico que anhela la libertad.",
    },
    {
      id: 9,
      titulo: "Alguien Como Él",
      imagen: "assets/images/alguienComoEl.webp",
      descripcion: "Una historia de amor entre dos personas que parecen ser opuestos.",
    }
  ];
}
