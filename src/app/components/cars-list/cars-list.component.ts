import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../shared/models/car_model';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-cars-list',
  imports: [CommonModule, CarCardComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {
  items: CarModel[] = [
    {
      id: 1,
      name: 'Speedster',
      color: 'Red',
      material: 'Plastic',
      price: 350,
      inStock: true
    },
    {
      id: 2,
      name: 'Monster Truck',
      color: 'Blue',
      material: 'Metal',
      price: 520,
      inStock: false
    },
    {
      id: 3,
      name: 'City Racer',
      color: 'Yellow',
      material: 'Plastic',
      price: 410,
      inStock: true
    }
  ];
}
