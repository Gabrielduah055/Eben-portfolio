import { Routes } from '@angular/router';
import { META } from './data/content.constants';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: META.home.title,
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: META.about.title,
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
    title: META.work.title,
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: META.services.title,
  },
  {
    path: 'lifestyle',
    loadComponent: () => import('./pages/lifestyle/lifestyle.component').then(m => m.LifestyleComponent),
    title: META.lifestyle.title,
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: META.contact.title,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
