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
      imageUrl: 'images/red_car.png   images/red_car.png',
      color: 'Red',
      material: 'Plastic',
      price: 350,
      inStock: true
    },
    {
      id: 2,
      name: 'Monster Truck',
      imageUrl: 'images/blue_car.png',
      color: 'Blue',
      material: 'Metal',
      price: 520,
      inStock: false
    },
    {
      id: 3,
      name: 'City Racer',
      imageUrl: 'images/yellow_car.png',
      color: 'Yellow',
      material: 'Plastic',
      price: 410,
      inStock: true
    }
  ];
}
