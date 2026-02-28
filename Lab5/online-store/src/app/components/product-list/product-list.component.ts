import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = input.required<Product[]>();
  delete = output<number>();

  deleteProduct(id: number) {
    this.delete.emit(id);
  }
}
