import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { GraphService } from 'src/app/microsoft-graph.service';
import { ServiceService } from 'src/app/products/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit{
  constructor( private router:Router, private service:ServiceService, private http:HttpClient , private graphService : GraphService, private msalService:MsalService){}
  photo:any;
  public searchTerm:string='';

  @ViewChild( "Search")marker!:ElementRef

  ngAfterViewInit(){
    this.marker.nativeElement.focus()
  
  }
  ngOnInit(){
  
   
  
    
  }


  navigate(){
    this.router.navigate(['cart'])

  }

  route(){
    this.router.navigate(['./createview'])
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement ).value;
    console.log(this.searchTerm)
    this.service.search.next(this.searchTerm);

  }

 

}
// debugger
// const response = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
//   headers: { Authorization: 'Bearer eyjo...' },
// });
// debugger
// const pictureBlob = await response.blob();
// console.log( pictureBlob );



  
