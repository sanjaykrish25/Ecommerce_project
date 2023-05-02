import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AccessTokenCache } from '@azure/msal-common';
import { Category } from 'src/app/framework/category';
import { Products } from '../products';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-product-category',
  templateUrl: './view-product-category.component.html',
  styleUrls: ['./view-product-category.component.scss']
})
export class ViewProductCategoryComponent implements OnInit {
  constructor( private service : ServiceService , private activateRoute : ActivatedRoute){}
  getCat:Category|any;
  productList:Products|any;
  // productList:Products|any;
  ngOnInit() {

    this.activateRoute.params.subscribe((res:any)=>{
      debugger
      console.log(res)
      this.getCat=res.id
    })
    this.service.getCategoryAllProducts(this.getCat).subscribe( (data) => {
      debugger
      console.log(data)
      this.productList=data
    })

    
    

    


  



    
    

    // this.activateRoute.params.subscribe( res => {
    //   console.log(res)
    //   this.getCategory=res['Category']

    //   this.service.getCategoryAllProducts(this.getCategory).subscribe( data =>{
    //     console.log(data);
        
    //     this.productList= data
    //   })
    // })
   
  }


}
