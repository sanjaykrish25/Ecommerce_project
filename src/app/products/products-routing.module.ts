import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '../msal.guard';
import { CreateProductsComponent } from './create-products/create-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductCategoryComponent } from './view-product-category/view-product-category.component';
import { ViewProductDateComponent } from './view-product-date/view-product-date.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [{ path: '', component: ViewAllProductsComponent },
{path:'createview',component:CreateProductsComponent},
{path:'viewallproducts/:id',component:ViewAllProductsComponent},
{path:'update', component:UpdateProductComponent},
{path:'viewproductdate', component:ViewProductDateComponent},
{path:'delete',component:DeleteProductComponent},
{path:'viewcategory/:id', component:ViewProductCategoryComponent},
{path:'viewproduct/:id', component:ViewProductsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
