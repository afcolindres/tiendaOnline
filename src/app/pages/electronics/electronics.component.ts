import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit{
  
  listProduc:any=[];
  constructor (private product: ProductsService){

  }
  ngOnInit(){
    this.product.GetProductos("electronics").subscribe((response: any) => {
      this.listProduc=response;
    })
  }

}
