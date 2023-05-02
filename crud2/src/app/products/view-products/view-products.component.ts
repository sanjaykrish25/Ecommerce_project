import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit{
  products=0

  constructor(private activateroute:ActivatedRoute){}
  ngOnInit(){
    this.activateroute.params.subscribe(param =>{
      this.products= param['id']

    })
  
  }



}
