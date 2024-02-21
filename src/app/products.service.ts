import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }

  // GetProductos(categoria: string){
  //   return this.http.get(`https://fakestoreapi.com/products/category/${categoria}`);
  // }
  GetProductos(categoria: string):  Observable<Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${categoria}`);
  }

  GetDetalleProducto(idProducto: Number): Observable<Product>{
    return this.http.get<Product>(`https://fakestoreapi.com/products/${idProducto}`);
  }

}
