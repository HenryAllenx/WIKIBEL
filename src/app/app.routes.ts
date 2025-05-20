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
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component')
  },
  {
    path:'login',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path:'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)

  },
  {
    path:'parceiros',
    loadComponent:()=> import('./pages/partners/partners.component')
  },
  {
    path:'turismo',
    loadComponent: ()=> import('./pages/tourism/tourism.component')
  },
  {
    path:'criar-rotas',
    loadComponent: ()=>import('./pages/create-routes/create-routes.component')
  },
  {
    path: 'ver-rota/:id',
    loadComponent: () => import('./pages/ver-rotas/ver-rotas.component')
  },
  {
    path:'culture',
    loadComponent: ()=> import('./pages/culture/culture.component')
  },
  {
    path:'Basilica-de-Nazaré',
    loadComponent:()=> import('././pages/basilica/basilica.component')
  },
  {
    path:'Casa-11-Janelas',
    loadComponent:()=> import('./pages/casa-janelas/casa-janelas.component')
  },
  {
    path:'Ver-o-Rio',
    loadComponent:()=> import('./pages/ver-o-rio/ver-o-rio.component')
  },
  {
    path:'Estacao-Docas',
    loadComponent:()=> import('./pages/estacao-docas/estacao-docas.component')
  },
  {
    path:'Forte-do-Presepio',
    loadComponent:()=> import('./pages/forte-do-presepio/forte-do-presepio.component')
  },
  {
    path:'Igreja-Se',
    loadComponent:()=> import('./pages/igreja-se/igreja-se.component')
  },
  {
    path:'Igreja-Mercês',
    loadComponent:()=> import('./pages/igreja-merces/igreja-merces.component')
  },
  {
    path:'Igreja-Santana',
    loadComponent:()=> import('./pages/igreja-santana/igreja-santana.component')
  },
  {
    path:'Igreja-Sao-Joao',
    loadComponent:()=> import('./pages/igreja-sao-joao/igreja-sao-joao.component')
  },
  {
    path:'Palacio-Lemos',
    loadComponent:()=> import('./pages/palacio-lemos/palacio-lemos.component')
  },
  {
    path:'Palacio-da-Residencia',
    loadComponent:()=> import('./pages/palacio-residencia/palacio-residencia.component')
  },
  {
    path:'Paris-n-America',
    loadComponent:()=> import('./pages/paris-n-america/paris-n-america.component')
  },
  {
    path:'Porto-Futuro',
    loadComponent:()=> import('./pages/porto-futuro/porto-futuro.component')
  },
  {
    path:'Mangal-Garcas',
    loadComponent:()=> import('./pages/mangal-garcas/mangal-garcas.component')
  },
  {
    path:'Museu-Goeldi',
    loadComponent:()=> import('./pages/museu-goeldi/museu-goeldi.component')
  },
  {
    path:'Praça-Batista',
    loadComponent:()=> import('./pages/praca-batista/praca-batista.component')
  },
  {
    path:'Praça-Republica',
    loadComponent:()=> import('./pages/praca-republica/praca-republica.component')
  },
  {
    path:'Praça-Waldermar',
    loadComponent:()=> import('./pages/praca-waldermar/praca-waldermar.component')
  },
  {
    path:'Theatro-da-Paz',
    loadComponent:()=> import('./pages/theatro-da-paz/theatro-da-paz.component')
  },
  {
    path:'Ver-o-Peso',
    loadComponent:()=> import('./pages/ver-o-peso/ver-o-peso.component')
  }

];




