import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/products/products';
import { ServiceService } from 'src/app/products/service.service';
import { Category } from '../category';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  productList: Products | any
  getCategory: Category| any
  getCategoryid:Products|any

  constructor(private service:ServiceService, private activateRoute:ActivatedRoute){}
  ngOnInit(){
    // debugger
    this.service.getCategoryDetails().subscribe( data =>{
      // console.log(data)
      this.getCategory=data
    })
    // debugger
    this.activateRoute.params.subscribe( res => {
      // console.log(res)
      this.getCategoryid=res
      // debugger

    })
    
    this.service.getCategoryAllProducts(this.getCategoryid).subscribe( data =>{
  
      // console.log(data);
      
      this.productList= data
    })
  
  }

}
