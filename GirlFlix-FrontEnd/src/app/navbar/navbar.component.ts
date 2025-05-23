import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  cerrarSesion() {
    // Puedes limpiar datos de sesión aquí si fuera necesario
    this.router.navigate(['/login']);
  }
}
// En este componente, se ha añadido un método cerrarSesion que redirige al usuario a la página de inicio de sesión.