import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
 
 
 @Input() productItem!: Product
  
 @Input() addedToWishlist: boolean | undefined;

 

  constructor(
    private msg: MessengerService,
    private productService: ProductService,
    private wishlistService: WishlistService,
    
    
    ) { }
 
  ngOnInit(): void {
  }

  handleAddToCart(bookId) {
    this.productService.handleAddToCart(bookId).subscribe();
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.bookId).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.bookId).subscribe(() => {
      this.addedToWishlist = false;
    })
  }
}
