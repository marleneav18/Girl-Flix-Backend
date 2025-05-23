import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { BuscarComponent } from './buscar/buscar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', redirectTo: 'peliculas' }
];
