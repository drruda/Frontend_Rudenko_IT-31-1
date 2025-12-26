import { Routes } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';


export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: CarsListComponent },
  { path: 'items/:id', component: CarDetailsComponent }
];
