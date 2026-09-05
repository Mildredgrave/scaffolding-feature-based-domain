import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page')
        .then((m) => m.HomePage)
  },
  {
    path: 'clima',
    loadComponent: () =>
      import('./features/clima/pages/clima.page')
        .then((m) => m.ClimaPage)
  },
  {
    path: 'clima-fotografia-page',
    loadComponent: () => 
      import('./features/clima-fotografia/pages/clima-fotografia-page.page')
        .then( m => m.ClimaFotografiaPagePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];