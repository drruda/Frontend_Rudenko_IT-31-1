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
      description_1: 'Speedster is a bright and dynamic toy car created for children who enjoy fast races and imaginative play. Its simple but attractive design makes it suitable for both indoor and outdoor games.',
      description_2: 'The car is made from durable plastic, which ensures long-term use and resistance to minor impacts. Thanks to its lightweight construction, Speedster is easy to hold and play with even for younger children.',
      imageUrl: 'images/red_car.png',
      color: 'Red',
      material: 'Plastic',
      price: 350,
      inStock: true
    },
    {
      id: 2,
      name: 'Monster Truck',
      description_1: 'Monster Truck is a powerful and rugged toy vehicle designed for kids who love off-road adventures and overcoming obstacles. Its massive wheels and aggressive styling make it a standout piece in any toy collection.',
      description_2: 'The truck is made from high-quality metal, providing extra weight and exceptional durability for intense play sessions. This sturdy construction ensures it can handle the toughest terrains both inside and outside.',
      imageUrl: 'images/blue_car.png',
      color: 'Blue',
      material: 'Metal',
      price: 520,
      inStock: false
    },
    {
      id: 3,
      name: 'City Racer',
      description_1: 'City Racer is a sleek and elegant car perfect for navigating the busy streets of a toy metropolis with style and speed. Its aerodynamic shape and bright yellow finish are designed to capture every childs attention.',
      description_2: 'Crafted from premium lightweight plastic, this model is built for agility and effortless maneuvering during high-speed chases. It is the ideal choice for young drivers who value precision and modern design in their fleet.',
      imageUrl: 'images/yellow_car.png',
      color: 'Yellow',
      material: 'Plastic',
      price: 410,
      inStock: true
    }
  ];
}
