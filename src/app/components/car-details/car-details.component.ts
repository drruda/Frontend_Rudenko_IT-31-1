import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CarModel } from '../../shared/models/car_model';

@Component({
  selector: 'app-car-details',
  imports: [ CommonModule ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
  car: CarModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.paramMap.get('id');

    if (idFromUrl) {
      const id = Number(idFromUrl);
      this.car = this.dataService.getItemById(id);
    }
  }
}
