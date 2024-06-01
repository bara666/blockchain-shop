import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    MatIconModule
  ],

})
export class AppComponentModule { }
