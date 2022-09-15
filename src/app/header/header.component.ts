import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  addedProducts: any = [];
  totalProducts: number = 0;
  constructor(public _commonSvc: CommonService, private router: Router) {
    this._commonSvc.addedProducts$.subscribe((res) => {
      console.log(res);
      this.keepTrackOnAddedProd(res);
    });
  }

  ngOnInit(): void {}

  keepTrackOnAddedProd(addCartTrigger: any) {
    console.log(addCartTrigger);

    let count = 0;
    let index = this.addedProducts.findIndex(
      (x: any) => x.name == addCartTrigger.details.name
    );

    if (index == -1) {
      this.addedProducts.push(addCartTrigger.details);
    } else {
      this.addedProducts[index].cartCount = addCartTrigger.details.cartCount;
    }

    for (let i = 0; i < this.addedProducts.length; i++) {
      count = count + this.addedProducts[i].cartCount;
    }
    this.totalProducts = count;
    console.log(this.addedProducts);
  }
  // {queryParams: {prods: JSON.stringify(this.addedProducts)}}
  checkout() {
    if (this.totalProducts != 0) {
      console.log('checkout clicked');
      this.router.navigate(['checkout'], {
        queryParams: { products: JSON.stringify(this.addedProducts) },
      });
    }
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
