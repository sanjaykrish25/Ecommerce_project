import { ReturnStatement, Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { ServiceService } from './products/service.service';

@Injectable({
  providedIn: 'root'
})
export class MsalGuard implements CanActivate {

  constructor(private msalservice:MsalService, private router:Router,private service:ServiceService){}
  canActivate():boolean {
    debugger
      if(this.service.isLoggedIn() !=null){ 
        return true
      }
      
      
      this.router.navigate(['mainpage'])
       
      return false
  }

  
}
