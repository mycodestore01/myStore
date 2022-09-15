import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  productList: any;

 
  constructor(private _commonSvc: CommonService) { }

  ngOnInit(): void {
    this._commonSvc.getProductList().subscribe(res=>{
      if(this._commonSvc.productDetails.length == 0) {
        this._commonSvc.productDetails = res.productDetails;;
      }
      this.productList = this._commonSvc.productDetails;
    })
  }

  share(product: any ) {
    alert(product.name + " has been added to cart!")
    this._commonSvc._addedProducts.next({details: product, identifier: 'increment'});
  }

  decrementor(product: any, index: number) {
    if(product.cartCount != 0) {
      product.cartCount--;
      this._commonSvc._addedProducts.next({details: product, identifier: 'decrement'});
    }

  }

  incrementor(product: any, index: number) {
    product.cartCount++;
    this._commonSvc._addedProducts.next({details: product, identifier: 'increment'});
  }

  navigateToDetails(product:any, i: number) {
    console.log(product, i)
  }

}
