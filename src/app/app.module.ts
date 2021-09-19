import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductListComponent } from './shoppingcart/product-list/product-list.component';
import { SimilarListComponent } from './shoppingcart/similar-list/similar-list.component';
import { SimilarItemComponent } from './shoppingcart/similar-list/similar-item/similar-item.component';
import { ProductItemComponent } from './shoppingcart/product-list/product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './shoppingcart/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    ProductListComponent,
    SimilarListComponent,
    SimilarItemComponent,
    ProductItemComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
