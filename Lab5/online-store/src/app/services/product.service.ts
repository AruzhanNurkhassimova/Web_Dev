

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
    ];

  products: Product[] = [
    { id: 1,
      name: 'Смартфон Apple iPhone 15 Pro 128Gb NanoSIM+eSIM серый',
      description: 'Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой профессионального уровня.',
      price: 699000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h55/86319883091998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hf7/86319883124766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h13/86319883157534.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?srsltid=AfmBOory9W_8itjFqlxJBPopLFxTYa8GM2ufFx3fy8KcSaGiRR6RAUil',
      likes: 0,
      categoryId: 1,
    },

  { id: 2,
    name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
    description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
    price: 840000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7gE7NVCW9P5m-Pp-LNh3xxcb&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BclPDmMIOUmj9no_gUPYn6LpBj5O_i3RTqk-LaNbu55qoxM6Kuw49BoC9BIQAvD_BwE',
    likes: 0,
    categoryId: 1,
  },

  { id: 3,
    name: 'Смартфон Apple iPhone 16 128Gb розовый',
    description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
    price: 444899,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hc8/87295471714334.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h31/h42/87295471747102.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h93/h57/87295471779870.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h42/hbe/87295471812638.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?srsltid=AfmBOory9W_8itjFqlxJBPopLFxTYa8GM2ufFx3fy8KcSaGiRR6RAUil',
    likes: 0,
    categoryId: 1,
  },

  { id: 4,
    name: 'Смартфон Samsung Galaxy A36 5G 8 ГБ/128 ГБ белый',
    description: 'Samsung Galaxy A36 5G — это мощный и стильный смартфон с поддержкой сетей 5G, который станет вашим надёжным помощником в повседневной жизни.',
    price: 147998,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p84/30557260.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p28/p84/30557261.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd3/p83/30557264.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7f/p83/30557267.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-128-gb-belyi-136436225/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gbraid=0AAAAAC7-v7iMftmCC-SjCAucRVtdytMpH&gclid=CjwKCAiAkvDMBhBMEiwAnUA9Ba-3ko5_V2PnCZGPpRMu86b9uyzflzTJ-ikekKiOKA5617m2-cYdkBoCcSsQAvD_BwE',
    likes: 0,
    categoryId: 1,
  },

  { id: 5,
    name: 'Смартфон Samsung Galaxy S25 5G 12 ГБ/256 ГБ синий',
    description: 'Samsung Galaxy S25 5G — флагманский смартфон с передовыми технологиями, мощным процессором Snapdragon 8 Elite и потрясающей камерой 50 Мп.',
    price: 439887,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p39/p03/20107708.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p95/p00/20107711.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p41/p00/20107714.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gbraid=0AAAAAC7-v7iMftmCC-SjCAucRVtdytMpH&gclid=CjwKCAiAkvDMBhBMEiwAnUA9Ba-3ko5_V2PnCZGPpRMu86b9uyzflzTJ-ikekKiOKA5617m2-cYdkBoCcSsQAvD_BwE',
    likes: 0,
    categoryId: 1,
  },

    { id: 6,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Маленький чип. Грандиозный прорыв. 8‑ядерный процессор. Дольше работает. Дисплей Retina. Реалистичные цвета.',
      price: 439888,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    { id: 7,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции, предотвращающей смешивание потоков холодного и теплого воздуха.',
      price: 173963,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/64231934689310.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    { id: 8,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома.',
      price: 135000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p51/36556289.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/p03/36556305.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    { id: 9,
      name: 'Ноутбук Oyan Lite X14 14.1" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526',
      description: 'Внимание: ноутбук не для игр или работы с ресурсоемкими приложениями. Встроенная видеокарта Intel UHD Graphics 600 справляется только с базовыми задачами, такими как просмотр видео и работа в офисных программах.',
      price: 139500,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p47/48619240.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/p47/48619241.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    { id: 10,
      name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
      description: 'Ноутбук PRYME N5095 15.6” — оптимальное решение для учёбы и работы',
      price: 189990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/pfa/45122463.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pfa/45122464.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    { id: 11,
      name: 'Наушники HYDRA Home Minor бежевый',
      description: 'Представляем вам наушники HYDRA Minor — идеальный выбор для тех, кто ценит комфорт и высокое качество звука.',
      price: 4990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p7f/46750477.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/p7f/46750478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p7c/46750482.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    { id: 12,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
      price: 60483,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    { id: 13,
      name: 'Наушники ArrowX Air 4 белый',
      description: 'Наушники ArrowX Air 4 — идеальный выбор для любителей качественного звука и удобства.',
      price: 9990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p86/87390810.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p7f/46750477.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p32/p86/87390812.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p86/87390813.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-arrowx-air-4-belyi-152408837/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    { id: 14,
      name: 'Наушники Hyper BE62 черный',
      description: 'Наушники Hyper BE62 с внутриканальной конструкцией выполнены в черном корпусе.',
      price: 9990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h67/64347002929182.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h3f/64347006271518.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/he5/64347107459102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/hda/68109921452062.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hyper-be62-chernyi-102749656/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    { id: 15,
      name: 'Наушники Huawei FreeClip черный',
      description: 'Наушники TWS HUAWEI FreeClip с креплением на клипсы удобны для спорта и активного образа жизни.',
      price: 72984,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h3e/85254957596702.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/hdb/85254957727774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h00/85254957989918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/h42/85254958120990.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-huawei-freeclip-chernyi-116760063/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    { id: 16,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений!',
      price: 204990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    { id: 17,
      name: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб серый',
      description: 'Xiaomi Redmi Pad 2 — универсальный планшет с ярким 11-дюймовым экраном и мощным процессором MediaTek Helio G100 Ultra для работы и развлечений.',
      price: 107882,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p43/46204509.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p40/46204518.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    { id: 18,
      name: 'Планшет Huawei MatePad 11.5 2025 11.5 дюйм 8 Гб/128 Гб серый + подарок',
      description: 'Huawei MatePad 11.5 2025 — это универсальный планшет с ярким дисплеем и мощным процессором для работы и развлечений.',
      price: 164890,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p39/77818269.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p7b/66000932.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/p7b/66000933.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p7b/66000934.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-11-5-djuim-8-gb-128-gb-seryi-podarok-145940951/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    { id: 19,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб синий',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений!',
      price: 201676,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p12/37019481.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    { id: 20,
      name: 'Планшет Huawei MatePad S Keyboard TGR-W09 11.5 дюйм 8 Гб/256 Гб серебристый',
      description: 'Представляем Huawei MatePad S Keyboard TGR-W09 — мощный планшет с высокой производительностью и удобной клавиатурой в комплекте.',
      price: 149890,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p5b/4912194.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p5b/4912195.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p70/p5b/4912196.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p10/4912201.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-s-keyboard-tgr-w09-11-5-djuim-8-gb-256-gb-serebristyi-122142240/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

}
