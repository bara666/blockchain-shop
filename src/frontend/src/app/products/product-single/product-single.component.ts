import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.scss',
})
export class ProductSingleComponent implements OnChanges {

  @Input() product: any;
  public productComplet: any;

  constructor(private productosService: ProductsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.productosService.getProductByName(this.product.name).then(product => {
        this.productComplet = product;
      });
    }
  }
}
