import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-productdetailtabs',
  templateUrl: './productdetailtabs.component.html',
  styleUrls: ['./productdetailtabs.component.css']
})
export class ProductdetailtabsComponent {
  @Input() product!: Product;
}
