import { Component } from '@angular/core';
import { ProductService } from './services/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product:any;

  constructor(private getData:ProductService) {

  }

  ngOnInit(){
    this.getData.getData().subscribe((result)=>{
      console.log("result",result)
      this.product=result
    })
  }
}
