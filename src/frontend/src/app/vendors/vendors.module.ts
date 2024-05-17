import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorAvatarComponent } from './vendor-avatar/vendor-avatar.component';
import { AvatarModule } from 'ngx-avatars';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    VendorAvatarComponent
  ],
  imports: [
    MatCardModule,
    MatMenuModule,
    AvatarModule,
    CommonModule
  ],
  exports: [
    VendorAvatarComponent
  ]
})
export class VendorsModule { }
