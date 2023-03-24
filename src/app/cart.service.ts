import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getImage(GRAPH_ENDPOINT_GET_PHOTO: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

 

}
