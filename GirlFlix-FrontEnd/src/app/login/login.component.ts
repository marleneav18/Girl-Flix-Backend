import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion() {
    this.http.post('http://localhost:5270/api/login', {
      usuario: this.usuario,
      contraseña: this.password
    }).subscribe({
      next: (res: any) => {
        if (res.success) {
          localStorage.setItem('usuarioLogueado', this.usuario);
          this.router.navigate(['/index']);
        } else {
          alert('Credenciales inválidas');
        }
      },
      error: err => {
        // Aquí entra si el backend responde 401
        alert('Credenciales inválidas');
      }
    });
  }
  
}
