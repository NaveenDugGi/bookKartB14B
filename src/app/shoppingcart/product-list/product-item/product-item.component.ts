import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  [x: string]: any;
 
 @Input()
  productItem: Product = new Product; 

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendmsg(this.productItem)
  }

}
