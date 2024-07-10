import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlapiService {

  private productsSource = new BehaviorSubject<any[]>([]);
  products$ = this.productsSource.asObservable();

  constructor(private http: HttpClient) {}

  searchProducts(query: string) {
    this.http.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .subscribe((response: any) => {
        this.productsSource.next(response.results);
      });
  }
}
