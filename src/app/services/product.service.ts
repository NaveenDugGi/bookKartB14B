import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
  private readonly URL = environment.url;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL+'/Book/');
  }

  handleAddToCart(bookId: number){
    let userId = sessionStorage.getItem('userId')
    return this.http.post<any>("https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/${userId}/${bookId}", {})
  }

  getSimilarProducts(){
    
    return this.http.get('https://bookcart.azurewebsites.net/api/book/GetSimilarBooks/80');
  }
  
  

}
