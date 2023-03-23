import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegionDiscoverySources } from '@azure/msal-common/dist/utils/Constants';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category } from '../framework/category';
import{Products} from './products'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public search= new BehaviorSubject<string>('');
  public Response = new Subject();
  productList() {
    throw new Error('Method not implemented.');
  }
  private fullName$ = new BehaviorSubject<string>('');

  emptyProductsArray : any;
  

  constructor( private http:HttpClient) { }

  storeToken(tokenValue:string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }



  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  getFullName(){
    return this.fullName$.asObservable();

  }

  setFullName(fullname:string){
    this.fullName$.next(fullname)
  }

  create( data:any){
    const productUrl = 'http://localhost:3000/category/';
    return this.http.post(productUrl , data)
  }

  delete(delet:any){
    return this.http.delete('http://localhost:3000/category/'+delet)
  }

  viewProduct(): Observable<Products>{
    return this.http.get<Products>('http://localhost:3000/products/')
  }

  getCategoryDetails():Observable<Category>{
    return this.http.get<Category>('http://localhost:3000/category')
  }
  getCategoryproducts(categoryId:any):Observable<Products>{
    const productId='http://localhost:3000/products?categoryId='+ categoryId;
    return this.http.get<Products>(productId)

  }
  getCategoryAllProducts(catergoryId:any):Observable<Products>{
  const catergoryid='http://localhost:3000/products?categoryId='+ catergoryId;
  return this.http.get<Category>(catergoryid)
  } 


   
}
