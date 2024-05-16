import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.scss'
})
export class ProductSingleComponent {

  @Input() product: any;

}
