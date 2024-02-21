import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cardprodutdetail',
  templateUrl: './cardprodutdetail.component.html',
  styleUrls: ['./cardprodutdetail.component.css']
})
export class CardprodutdetailComponent {
  @Input() product!: Product;

  numberReturn(){
    return new Array(Math.round(this.product.rating.rate));
  }
}
