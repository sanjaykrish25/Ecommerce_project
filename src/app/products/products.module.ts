import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductDateComponent } from './view-product-date/view-product-date.component';
import { ViewProductCategoryComponent } from './view-product-category/view-product-category.component';
import { FrameworkModule } from "../framework/framework.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';





@NgModule({
    declarations: [
        ProductsComponent,
        CreateProductsComponent,
        ViewProductsComponent,
        ViewAllProductsComponent,
        UpdateProductComponent,
        DeleteProductComponent,
        ViewProductDateComponent,
        ViewProductCategoryComponent,
        FilterPipe

      
    ],
    exports: [ViewAllProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FrameworkModule,
        ReactiveFormsModule,
        FormsModule
      
        
    ]
})
export class ProductsModule { }
