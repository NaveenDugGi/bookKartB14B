import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-similar-list',
  templateUrl: './similar-list.component.html',
  styleUrls: ['./similar-list.component.scss']
})
export class SimilarListComponent implements OnInit {

  similarProductList: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getSimilarProducts().subscribe((products) => {
      this.similarProductList = products;

    });
  }

}

