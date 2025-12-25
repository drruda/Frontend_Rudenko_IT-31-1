import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CarsListComponent } from '../cars-list/cars-list.component';


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, CarsListComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {}
