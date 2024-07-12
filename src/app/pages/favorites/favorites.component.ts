import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MlFavoritosService } from '../../services/mlApi/ml-favoritos.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatCardModule, FormsModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  dataSource: any[] = [];
  columnsToDisplay = ['nome', 'valor', 'condicao', 'quantidade'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: any | null;

  constructor(private mlFavoritosService: MlFavoritosService,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.mlFavoritosService.products$.subscribe((products) => {
      this.dataSource = products;
    });

    this.mlFavoritosService.obterTodos();
  }

  visitarMercadoLivre(produto: any){
    window.open(produto.url_produto, "_blank");
  }

  atualizarProduto(produto: any) {
    this.mlFavoritosService.atualizar(produto).subscribe((result) => {
      if(result != undefined) {
        this._snackBar.open(`Produto ${result.id_mercado_livre} atualizado com sucesso`, undefined, { duration: 2000});
      }
    });
  }

  deletarProduto(produto: any){
    this.mlFavoritosService.deletar(produto).subscribe((result) => {
      if(result != undefined) {
        this.mlFavoritosService.obterTodos();
        this._snackBar.open(`Produto ${result.id_mercado_livre} removido com sucesso`, undefined, { duration: 2000});
      }
    });
  }
}
