import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  productId: any;

  constructor(public _commonSvc: CommonService, private location: Location, private activatedRouter: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(param=> this.productId = param.get('productId'));
    if(this?._commonSvc?.productDetails[this.productId]) {
      this.product = this._commonSvc.productDetails[this.productId]
    }
    else {
      this.router.navigate([''])
    }
  }

  incrementor() {
    this.product.cartCount++;
    this._commonSvc._addedProducts.next({details: this.product, identifier: 'increment'});
  }

  decrementor() {
    this.product.cartCount--;
    this._commonSvc._addedProducts.next({details: this.product, identifier: 'decrement'});
    
  }

  goBack() {
    this.location.back();
  }

}