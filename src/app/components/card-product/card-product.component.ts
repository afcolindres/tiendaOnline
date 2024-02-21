import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() product: any = [];

  constructor(private readonly router: Router){}

  goDetalle(id: number){
    this.router.navigate(['productdetail',id])
  }
  
}
