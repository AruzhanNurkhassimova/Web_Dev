import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

}
