import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarModule } from 'ngx-avatars';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButton,
    MatIconModule,
    MatMenuModule,
    AvatarModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
