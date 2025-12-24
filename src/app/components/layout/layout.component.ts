import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CarCardComponent } from '../car-card/car-card.component';


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, CarCardComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {}
