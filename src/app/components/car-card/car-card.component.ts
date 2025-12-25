import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../shared/models/car_model';

@Component({
  selector: 'app-car-card',
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {
  @Input() item!: CarModel;
}
