import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../shared/models/car_model';
import { CarCardComponent } from '../car-card/car-card.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-list',
  imports: [CommonModule, CarCardComponent, FilterComponent, FormsModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})

export class CarsListComponent implements OnInit {
  items$: Observable<CarModel[]> | undefined;
  selectedFilter: string = 'all';
  searchText: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items$ = this.dataService.getCars();
  }

  applyFilter() {
    this.dataService.filterItems(this.searchText, this.selectedFilter);
  }

  onFilterSelectionChanged(value: string) {
    this.selectedFilter = value;
    this.applyFilter();
  }

  onCarSelected(car: CarModel) {
    alert('You selected: ' + car.name + ' (Price: ' + car.price + ' UAH)');
  }

  getAllCount(): Observable<number> | undefined {
    return this.items$?.pipe(
      map((list: CarModel[]) => list.length)
    );
  }

  getInStockCount(): Observable<number> | undefined {
    return this.items$?.pipe(
      map((list: CarModel[]) => list.filter((c: CarModel) => c.inStock).length)
    );
  }

  getOutOfStockCount(): Observable<number> | undefined {
    return this.items$?.pipe(
      map((list: CarModel[]) => list.filter((c: CarModel) => !c.inStock).length)
    );
  }
}
