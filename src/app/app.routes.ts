import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home Page)
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to home
];
