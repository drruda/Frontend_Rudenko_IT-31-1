import { Component } from '@angular/core';
import { ToyCard } from '../../../shared/models/ToyCard';

@Component({
  selector: 'app-items-list',
  imports: [],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  toyCars: ToyCard[] = [
    {
      id: '1',
      name: 'Speedster',
      description: 'A fast and furious toy car.',
      price: 350,
      color: "red",
      material: 'metal',
      inStock: true,
      imageUrl: 'assets/images/speedster.jpg'
    },
    {
      id: '2',
      name: 'Road King',
      description: 'A durable and stylish toy car.',
      price: 400,
      color: 'blue',
      material: 'plastic',
      inStock: true,
      imageUrl: 'assets/images/road-king.jpg'
    },
    {
      id: '3',
      name: 'Classic Racer',
      description: 'A vintage toy car with timeless design.',
      price: 500,
      color: 'green',
      material: 'metal',
      inStock: false,
      imageUrl: 'assets/images/classic-racer.jpg'
    }
  ];
}
