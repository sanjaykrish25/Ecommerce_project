import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FrameworkModule} from './framework/framework.module';
import{ MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
// import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MSAL_INSTANCE } from '@azure/msal-angular';
import { MsalService } from '@azure/msal-angular';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductsModule } from "./products/products.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



export function msalInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:'506d1d0c-f129-48dd-9dda-bdb06c273024',
      redirectUri:'http://localhost:4200'
    }
  })
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);
  // protectedResourceMap.set('https://graph.microsoft-ppe.com/v1.0/me', ['user.read']); // PPE testing environment

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}


@NgModule({
    declarations: [
        AppComponent,
        MainpageComponent,
        LoginComponent,
        RegisterComponent,
        
    ],
    providers: [
        {
            provide: MSAL_INSTANCE,
            useFactory: msalInstanceFactory
        },
        MsalService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true
        },
        {
            provide: MSAL_INTERCEPTOR_CONFIG,
            useFactory: MSALInterceptorConfigFactory
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FrameworkModule,
        HttpClientModule,
        MsalModule,
        ProductsModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule{ }
