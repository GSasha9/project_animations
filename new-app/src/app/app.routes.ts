import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
