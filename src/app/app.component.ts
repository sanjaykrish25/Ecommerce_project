import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject } from 'rxjs';
import { ServiceService } from './products/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud2';
  respondate:any
  isUserLoggedIn:any
  private readonly _destory = new Subject<void>();

constructor(private msalservice:MsalService, private router:Router, private service:ServiceService ){
  localStorage.clear
}
 
  ngOnInit(){
  //   this.msalBroadCastService.inProgress$.pipe(filter((interactionStatus:InteractionStatus)=>interactionStatus==InteractionStatus.None)).
  //   subscribe(x=>{
  //     this.isUserLoggedIn=this.msalservice.instance.getAllAccounts().length>0
  //   })
  // }
  // ngOnDestroy(): void {
  //   this._destory.next(undefined)
  //   this._destory.complete();

  // this.msalservice.instance.handleRedirectPromise().then( res =>{
  //   if(res!==null && res!.account==null){
  //     this.msalservice.instance.setActiveAccount(res.account)
  //   }
  // })
  }

  // isLogged() :boolean{
  //   return this.msalservice.instance.getActiveAccount() !=null
  // }

  logIn(){
    // {
    //   if(this.msalGuardConfiguration.authRequest)
    //   {
    //     this.msalservice.loginRedirect({...this.msalGuardConfiguration.authRequest} as RedirectRequest)
    //   }
    // }
   
  //  this.msalservice.loginRedirect()

    }

  
    // logOut(){
    //   this.msalservice.logout()
    // }
    
      
     
      
    }
    
   
    // this.msalservice.loginPopup().subscribe((response:AuthenticationResult)=>{
    //   const account = this.msalservice.instance.getActiveAccount()
    //   this.msalservice.instance.setActiveAccount(account)
    // });

  
  


  
