import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductSingleComponent } from './product-single/product-single.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductSingleComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
