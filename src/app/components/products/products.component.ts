import { MlFavoritosService } from './../../services/mlApi/ml-favoritos.service';
import { Component } from '@angular/core';
import { MlapiService } from '../../services/mlFavoritosApi/mlapi.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: any[] = [];

  constructor(
    private mlapiService: MlapiService,
    private mlFavoritosService: MlFavoritosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.mlapiService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  favoritarProduto(produto: any) {
    this.mlFavoritosService.obterProduto(produto.id).subscribe(
      (result) => {
        if (result != undefined) {
          this._snackBar.open(
            `Produto ${result.id_mercado_livre} já cadastrado como favorito`,
            undefined,
            { duration: 2000 }
          );
        }
      },
      (error) => {
        let favorito = {
          condicao: produto.condition,
          id_mercado_livre: produto.id,
          marca: produto.attributes?.find((x: any) => x.id == 'BRAND')
            .value_name,
          nome: produto.title.substring(0, 200),
          quantidade: produto.available_quantity,
          url_imagem: produto.thumbnail,
          url_produto: produto.permalink,
          valor: produto.price,
        };

        this.mlFavoritosService.adicionar(favorito).subscribe((result) => {
          if (result != undefined) {
            this._snackBar.open(
              `Produto ${result.id_mercado_livre} favoritado com sucesso`,
              undefined,
              { duration: 2000 }
            );
          }
        });
      }
    );
  }
}
