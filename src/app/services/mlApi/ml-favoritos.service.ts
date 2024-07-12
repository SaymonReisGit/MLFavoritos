import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlFavoritosService {

  private productsSource = new BehaviorSubject<any[]>([]);
  products$ = this.productsSource.asObservable();

  constructor(private http: HttpClient) {}

  protected urlProdutos: string = "http://127.0.0.1:5000";

  obterTodos(){
    this.http.get(this.urlProdutos + '/produtos')
    .subscribe((response: any) => {
      this.productsSource.next(response.produtos);
    });
  }

  obterProduto(id: any): Observable<any>{
    return this.http.get<any>(this.urlProdutos + '/produto/' + id);
  }

  adicionar(produto: any){
    const formData = new FormData();
    formData.append('condicao', produto.condicao);
    formData.append('id_mercado_livre', produto.id_mercado_livre);
    formData.append('marca', produto.marca);
    formData.append('nome', produto.nome);
    formData.append('quantidade', produto.quantidade);
    formData.append('url_imagem', produto.url_imagem);
    formData.append('url_produto', produto.url_produto);
    formData.append('valor', produto.valor);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.post<any>(this.urlProdutos + '/produto', formData, { headers: headers });
  }

  atualizar(produto: any){
    const formData = new FormData();
    formData.append('id', produto.id);
    formData.append('observacoes', produto.observacoes);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.put<any>(this.urlProdutos + '/produto', formData, { headers: headers });
  }

  deletar(produto: any){
    return this.http.delete<any>(this.urlProdutos+  '/produto' + `/${produto.id}`);
  }
}
