import { ProductsService } from './../services/products.service';
import { WishlistService } from './../services/wishlist.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-product',
  templateUrl: 'product.page.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: ProductsService, public wishlistService: WishlistService) {}

  ionViewDidLoad() {
    this.productsService.load();
  }

  launchWishlist() {
    this.navCtrl.navigateForward("wishlist");
  }

  addToWishlist(product){
    this.wishlistService.addProduct(product);
  }

}