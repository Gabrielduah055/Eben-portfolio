import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Daniel Mensah | Digital Marketer in UAE',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About | Daniel Mensah',
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
    title: 'Work | Daniel Mensah',
  },
  {
    path: 'work/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Case Study | Daniel Mensah',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | Daniel Mensah',
  },
  {
    path: 'lifestyle',
    loadComponent: () => import('./pages/lifestyle/lifestyle.component').then(m => m.LifestyleComponent),
    title: 'Lifestyle | Daniel Mensah',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Daniel Mensah',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
