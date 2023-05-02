import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MiddleComponent } from './middle/middle.component';
import { CartComponent } from './cart/cart.component';
import{ FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MiddleComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[ HeaderComponent,FooterComponent,SidebarComponent, CartComponent]
})
export class FrameworkModule { }
