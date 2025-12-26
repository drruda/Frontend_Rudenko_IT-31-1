import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../shared/models/car_model';
import { CarCardComponent } from '../car-card/car-card.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-list',
  imports: [CommonModule, CarCardComponent, FilterComponent, FormsModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})

export class CarsListComponent implements OnInit, OnDestroy {
  items: CarModel[] = [];
  selectedFilter: string = 'all';
  searchText: string = '';

  private sub: Subscription = new Subscription();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getCars().subscribe((data) => {
      this.items = data;
  });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
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

  getAllCount() { return this.items.length; }
  getInStockCount() { return this.items.filter(c => c.inStock).length; }
  getOutOfStockCount() { return this.items.filter(c => !c.inStock).length; }
}
