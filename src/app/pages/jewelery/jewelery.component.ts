import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit{
  
  listProductJewelery$!: Observable<Product[]>;
  constructor (private product: ProductsService){

  }

  ngOnInit(){
    this.listProductJewelery$=this.product.GetProductos("jewelery");
  }
}
