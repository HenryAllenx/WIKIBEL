import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')

  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path:'login',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path:'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)

  },

];
