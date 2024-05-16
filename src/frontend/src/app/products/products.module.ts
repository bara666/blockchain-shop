import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductSingleComponent } from './product-single/product-single.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { AvatarModule } from 'ngx-avatars';

import { PokemonClient } from 'pokenode-ts';
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
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    AvatarModule
  ],
  providers: [PokemonClient]
})
export class ProductsModule { }
