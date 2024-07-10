import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ProductsComponent } from '../../components/products/products.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    SearchBarComponent,
    ProductsComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
