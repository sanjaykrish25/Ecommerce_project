import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/products/service.service';
import { Category } from '../category';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit{

  addCart:Category| any;
  catchCart:Category|any;
  constructor( private activateRoute: ActivatedRoute, public servive:ServiceService){}

  ngOnInit(){
      this.activateRoute.params.subscribe((res:any)=>{
        // console.log(res)
        this.addCart=res.id
    })

    // const addCart =this.activateRoute.snapshot.params['id']

    this.servive.getCategoryAllProducts(this.addCart).subscribe( data=> {
      debugger
      console.log(data)
      this.catchCart=data;
      console.log(this.catchCart)
    })
   
      

  // @Input() addCart:any
}
}
