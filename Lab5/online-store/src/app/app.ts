import { Component, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import {Category} from './models/category.model';
import {Product} from './models/product.model';
import {Router} from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: 'app.html',
  styleUrls: ['app.css']
  //template: `<app-product-list></app-product-list>`
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory = signal<Category | null>(null);
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);

    this.products = this.productService.getProducts().filter(product => product.categoryId === category.id);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
