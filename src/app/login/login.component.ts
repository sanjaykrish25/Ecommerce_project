import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { ServiceService } from '../products/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
constructor(private msalservice:MsalService, private router:Router, private service:ServiceService, private http:HttpClient ){
  localStorage.clear
}
Response:string|any;
 
  ngOnInit(){



    
  //   this.msalBroadCastService.inProgress$.pipe(filter((interactionStatus:InteractionStatus)=>interactionStatus==InteractionStatus.None)).
  //   subscribe(x=>{
  //     this.isUserLoggedIn=this.msalservice.instance.getAllAccounts().length>0
  //   })
  // }
  // ngOnDestroy(): void {
  //   this._destory.next(undefined)
  //   this._destory.complete();

  this.msalservice.instance.handleRedirectPromise().then( res =>{
    debugger
    if(res!=null && res.account!=null){
      this.msalservice.instance.setActiveAccount(res.account)
    }
  })
  }

  isLogged() :boolean{
    return this.msalservice.instance.getActiveAccount() !=null
  }

  logIn(){
    if(this.msalservice.loginRedirect() !=null){

      this.router.navigate(['mainpage'])

    }
    // {
    //   if(this.msalGuardConfiguration.authRequest)
    //   {
    //     this.msalservice.loginRedirect({...this.msalGuardConfiguration.authRequest} as RedirectRequest)
    //   }
    // }
   
   

    }

  
    logOut(){
      this.msalservice.logout()
    }
    
      
     callProfile(){
      this.http.get('https://graph.microsoft.com/v1.0/me').subscribe( res =>{
        this.Response = JSON.stringify(res)
      })
     }
      
    }
    


