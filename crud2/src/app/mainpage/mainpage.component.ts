import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../products/service.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
 
   
  
constructor(public serviceService : ServiceService, public router : Router){

}
  // @Input() dateR:any;
 
}
