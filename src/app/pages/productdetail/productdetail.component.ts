import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  idProducto:number=-1;
  detailProduct$!: Observable<Product>;
  
  constructor(private readonly route: ActivatedRoute, private product: ProductsService){
  }

  ngOnInit(): void{
    this.route.params.subscribe ( (params: Params) => {
      this.idProducto=params['id']
    })
    
    this.detailProduct$=this.product.GetDetalleProducto(this.idProducto);
  }

  
}
