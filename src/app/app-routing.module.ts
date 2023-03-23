import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './framework/cart/cart.component';
import { FooterComponent } from './framework/footer/footer.component';
import { HeaderComponent } from './framework/header/header.component';
import { SidebarComponent } from './framework/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MsalGuard } from './msal.guard';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { RegisterComponent } from './register/register.component';
import { SimpleGuard } from './simple.guard';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
{path:'', component:LoginComponent},
{path:'header',component:HeaderComponent, canActivate:[MsalGuard]},
{path:'footer',component:FooterComponent},
{path:'sidebar',component:SidebarComponent},
{path:'cart',component:CartComponent},
{path:'cart/:id',component:CartComponent},
{path:'register',component:RegisterComponent},
{path:'mainpage', component:MainpageComponent,canActivate:[MsalGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
