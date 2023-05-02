import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any=[]
  public  productCartList = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    return this.productCartList.asObservable();

  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productCartList.next(product);

  }

  addToCart(product:any){
    this.cartItemList.push(product)
    this.productCartList.next(this.cartItemList)
    this.getTotalPrice()
    console.log(this.cartItemList)
  }
  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
  }

  removCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })

  }
  removeAllCart(){
    this.cartItemList=[]
    this.productCartList.next(this.cartItemList)
  }
}
