import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-date',
  templateUrl: './view-product-date.component.html',
  styleUrls: ['./view-product-date.component.scss']
})
export class ViewProductDateComponent implements OnInit{

  viewDate='';

  constructor(private activateRoute: ActivatedRoute){}
  ngOnInit(){
    this.activateRoute.queryParams.subscribe( param => {
      this.viewDate= param['date'];
    })

   
  }

}
