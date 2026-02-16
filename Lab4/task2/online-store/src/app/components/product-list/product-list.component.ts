import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with powerful processor and improved camera.',
      price: 699000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h55/86319883091998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hf7/86319883124766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h13/86319883157534.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?srsltid=AfmBOory9W_8itjFqlxJBPopLFxTYa8GM2ufFx3fy8KcSaGiRR6RAUil'
    },

    {
      id: 2,
      name: 'Ноутбук Acer Aspire 3 15.6',
      description: '4 Гб / HDD 500 Гб / Win 10 / A315-34 / NX.HE3ER.001',
      price: 899000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h01/63851303305246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/hc4/63851310448670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h3b/63851313397790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/h6d/63851316543518.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-4-gb-hdd-500-gb-win-10-a315-34-nx-he3er-001-100218142/?srsltid=AfmBOopsEP7zfUZ8QvLx81NOvb3_Ec2I1_NjOT01RTIoTlAYLd2TJdyP'
    },

    {
      id: 3,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
      price: 60874,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?srsltid=AfmBOoqxwFhyCmgRx_aFln_gFH-jn-oALqWFcFmMZnqt3WBtpmNDglu-'
    },

    {
      id: 4,
      name: 'Наушники JBL Tune 510BT черный',
      description: 'Наушники позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов.',
      price: 12782,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/'
    },

    {
      id: 5,
      name: 'Микрофон Fifine AM8 черный',
      description: 'Микрофон Fifine AM8 — профессиональное решение для записи звука с высоким качеством.',
      price: 32562,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/hf5/81108035239966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/hf5/81108035239966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h69/81108035305502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h8d/86373975162910.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mikrofon-fifine-am8-chernyi-110695025/?c=750000000'
    },

    {
      id: 6,
      name: 'Мышь OMG-01 черный-серый',
      description: 'Два режима подключения USB 2. 4 ГГЦ и Bluetooth.',
      price: 3990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p2a/61670670.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/p2a/61670670.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/p2d/61670671.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p31/61670672.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/omg-01-chernyi-seryi-144482148/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_peripherals_desktop&gbraid=0AAAAAC7-v7jYVZjoCN5LAuF0nInOFVV6m&gclid=CjwKCAiAncvMBhBEEiwA9GU_fh2G4QT0qOGb4hmmpgq1J6VgydzmA7S0J-wK9SSspfJFLMOXIlMm4BoCo0sQAvD_BwE'
    },

    {
      id: 7,
      name: 'Клавиатура X-Game XK-100UB черный',
      description: 'Классическая клавиатура компактного дизайна, уменьшена благодаря оптимизации размеров рамки.',
      price: 1589,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p77/24880216.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe6/p77/24880216.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h94/86349830914078.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/hf1/86349830946846.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/x-game-xk-100ub-chernyi-9200019/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_peripherals_desktop&gbraid=0AAAAAC7-v7jYVZjoCN5LAuF0nInOFVV6m&gclid=CjwKCAiAncvMBhBEEiwA9GU_fsfq2936fIihUwywjurQv-zGxQsvyEF33eV7n1FdGSoOYCkr8uVbSxoCPdEQAvD_BwE'
    },

    {
      id: 8,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений!',
      price: 212108,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p8c/37011948.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p8c/37011949.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000'
    },

    {
      id: 9,
      name: 'Смарт-часы ARTEO Nereus 47 мм серебристый-оранжевый',
      description: 'ARTEO Nereus 47 мм — универсальные умные часы с широким функционалом и стильным дизайном для активной жизни.',
      price: 77790,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p65/p74/79508565.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p74/79508565.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p74/79508566.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5e/p77/79508571.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/arteo-nereus-47-mm-serebristyi-oranzhevyi-144181567/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_watches_old_desktop&gbraid=0AAAAAC7-v7gJojL6v8VaYeY72ufPDJLAU&gclid=CjwKCAiAncvMBhBEEiwA9GU_foAAVtZqb5jr_RCbXg0XmsohjdI1End9PahmJQS0cfpqXayb6owgThoCgNwQAvD_BwE'
    },

    {
      id: 10,
      name: 'PIXEL i5-10400F / RTX 3060 12 Гб / 16 Гб / 0 Гб SSD 512 Гб / Win 10',
      description: 'Представляем вам мощный системный блок PIXEL, который идеально подходит для игр и работы.',
      price: 335000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/hb0/64048536518686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h5b/64048538484766.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pixel-i5-10400f-rtx-3060-16gb-512-gb-ssd-win-10-103421555/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gbraid=0AAAAAC7-v7jUhLUG3wBT5sRDP7MdcP55o&gclid=CjwKCAiAncvMBhBEEiwA9GU_fnVXHXq9G5-RH0LwRkwFj4Q9irKMWCG8Y3ak5EnHT8CRrhVpuQA8gBoCdGsQAvD_BwE'
    },


  ];
}
