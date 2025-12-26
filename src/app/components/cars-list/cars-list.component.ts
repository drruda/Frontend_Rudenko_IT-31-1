import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../shared/models/car_model';
import { CarCardComponent } from '../car-card/car-card.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cars-list',
  imports: [CommonModule, CarCardComponent, FilterComponent, FormsModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})

export class CarsListComponent implements OnInit {
  items: CarModel[] = [];
  selectedFilter: string = 'all';
  searchText: string = '';

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.items = this.dataService.getCars();
  }

  onCarSelected(car: CarModel) {
    console.log('Ви обрали машину:', car.name);
    alert('You selected: ' + car.name + ' (Price: ' + car.price + ' UAH)');
  }

  getAllCount() { return this.items.length; }
  getInStockCount() { return this.items.filter(c => c.inStock).length; }
  getOutOfStockCount() { return this.items.filter(c => !c.inStock).length; }

  onFilterSelectionChanged(value: string) {
    this.selectedFilter = value;
  }

  get filteredItems() {
  let filtered = this.items;

  if (this.selectedFilter === 'available') {
    filtered = this.items.filter(item => item.inStock);
  } else if (this.selectedFilter === 'outOfStock') {
    filtered = this.items.filter(item => !item.inStock);
  }

  if (this.searchText.trim() !== '') {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  return filtered;
}
}
