import { Routes } from '@angular/router';

export const routes: Routes = [

{
     path: 'inicio',
    loadComponent: () => import('./inicio/inicio.component').then(m => m.InicioComponent),
    title: 'Nuestros Servicios'

},
];