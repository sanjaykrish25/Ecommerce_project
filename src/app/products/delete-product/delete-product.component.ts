import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit{
  constructor(private service:ServiceService){}
  ngOnInit(){
    this.service.delete('data').subscribe( data =>{
      console.log(data)
    })
    
  }



}
