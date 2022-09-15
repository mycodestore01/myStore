import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {
  addedProducts: any;
  prodTotalPrice: number = 0;
  discountAmount: number = 0;
  deliveryCharges: number = 0;
  finalAmount: number = 0;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe((res) => {
      let queryParamsData: any = res;
      this.addedProducts = JSON.parse(queryParamsData.params.products);
      console.log(this.addedProducts);
      this.calculate(this.addedProducts);
    });
  }

  getPrice() {}

  calculate(addedProducts: any) {
    console.log(addedProducts);
    this.addedProducts.forEach((v: any, i: number, a: []) => {
      this.prodTotalPrice = this.prodTotalPrice + v.price * v.cartCount;
    });
    console.log(this.prodTotalPrice);
  }

  getCalcAmount(identifier: string) {
    if (identifier == 'discount') {
      this.discountAmount = this.prodTotalPrice * 0.1;
      return '₹' + this.discountAmount;
    } else if (identifier == 'dc') {
      this.deliveryCharges = this.prodTotalPrice >= 500 ? 0 : 50;
      return this.deliveryCharges == 0 ? 'FREE' : '₹' + this.deliveryCharges;
    } else if (identifier == 'final') {
      this.finalAmount =
        this.prodTotalPrice - this.discountAmount + this.deliveryCharges;
      return '₹' + this.finalAmount;
    }

    return 0;
  }

  placeOrder() {
    // alert('Order placed, will deliver it soon!')
    this.router.navigate(['fillup-details']);
  }
}
