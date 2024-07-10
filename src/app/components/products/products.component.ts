import { Component } from '@angular/core';
import { MlapiService } from '../../services/mlapi.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private mlapiService: MlapiService) {}

  ngOnInit() {
    this.mlapiService.products$.subscribe((products) => {
      this.products = products;
    });
  }
}
