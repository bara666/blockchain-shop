import { Component, Input } from '@angular/core';
import { Vendor } from '../../services/vendors.service';

@Component({
  selector: 'vendor-avatar',
  templateUrl: './vendor-avatar.component.html',
  styleUrl: './vendor-avatar.component.scss'
})
export class VendorAvatarComponent {
  @Input() vendor: Vendor = new Vendor();

}
