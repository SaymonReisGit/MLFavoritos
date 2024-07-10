import { Component } from '@angular/core';
import { MlapiService } from '../../services/mlapi.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  query: string = '';

  constructor(private mlapiService: MlapiService) {}

  searchProducts() {
    this.mlapiService.searchProducts(this.query);
  }
}
