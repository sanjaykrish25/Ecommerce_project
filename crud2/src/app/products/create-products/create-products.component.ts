import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {

  addAddress:any;

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    
    
  }

  formBuilder = this.fb.group({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('',[Validators.required]),
    Address:new FormControl('',[Validators.required]),
   Address2:new FormControl('',[Validators.required]),
   City: new FormControl('',[Validators.required]),
   State:new FormControl('',[Validators.required]),
    Zip: new FormControl('',[Validators.required]),






  })
  sumbitForm(){
    this.addAddress=this.formBuilder.value
    console.log(this.addAddress)
  
    
  }

 

}
