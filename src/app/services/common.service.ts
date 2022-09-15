import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

 public _addedProducts: Subject<any> = new Subject<any>();
 public addedProducts$: Observable<any>;
 public productDetails: any = new Array<any>();

  constructor(private http: HttpClient) {
    this.addedProducts$ = this._addedProducts.asObservable();
   }

  getProductList() : Observable<any> {
    return this.http.get("./../../assets/product-list.json")
  }
}
