import { Component } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-cars-list',
  imports: [],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {
  items: CarCardComponent[] = [
    {
      id: 1,
      name: 'Speedster',
      color: 'Red',
      material: 'Plastic',
      price: 350,
      inStoke: true
    },
    {
      id: 2,
      name: 'Monster Truck',
      color: 'Blue',
      material: 'Metal',
      price: 520,
      inStoke: false
    },
    {
      id: 3,
      name: 'City Racer',
      color: 'Yellow',
      material: 'Plastic',
      price: 410,
      inStoke: true
    }
  ];
}
