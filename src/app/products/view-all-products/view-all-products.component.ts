import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/framework/category';
import { Products } from '../products';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent implements OnInit {
  productsData:Category | any;
  addCart: Category| any;
  addcarts:Products|any

  constructor(private service:ServiceService, private route:Router, private activateRoute:ActivatedRoute){}
  searchkey:string='';

  ngOnInit(){


    this.service.viewProduct().subscribe(d => {
      this.productsData=d
      
    })
    this.activateRoute.params.subscribe( res =>{
      debugger
      // console.log(res)
      this.addCart=res
    })

    // this.service.getCategoryAllProducts(this.addCart).subscribe( (data) => {
    //   debugger
    //   console.log(data)
    //   this.addcarts=data


    // })
    
    
      // console.log(this.addCart)
      this.service.search.subscribe( data =>{
        this.searchkey=data
      })
  } 

  getDataCart(prod:any){
    // this.cartService.addToCart(prod)
    this.route.navigate(['cart',prod])

  }

  addcart(){
    // if(this.activateRoute.params.subscribe( res =>
    //   this.addCart=res )){

    // }

    // this.service.getCategoryDetails().subscribe( res =>{
    //   this.activateRoute.params.subscribe( res => {
    //     this.addCart=res
    //   })
    // })
  }

  
}
