import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../shared/models/car_model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {
  @Input() item!: CarModel;

  @Output() carSelected: EventEmitter<CarModel> = new EventEmitter<CarModel>();

  isClicked: boolean = false;
  toggleColor() {
    this.isClicked = !this.isClicked;
    this.carSelected.emit(this.item);
  }
}
