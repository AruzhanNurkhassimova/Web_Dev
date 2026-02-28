import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  product = input.required<Product>();

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`);
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`);
  }

}
