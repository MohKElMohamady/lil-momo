import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { Manufacturer } from '../models/manufacturer';
import { Type } from '../models/product-type';
import { Rim } from '../models/rim';

@Injectable({ providedIn: 'root' })
export class InMemoryRimService implements InMemoryDbService {
  createDb() {
    const rims: Rim[] = [
      {
        id: 'BBS-SUPERRS',
        name : "BBS Super RS",
        type: Type.RIM,
        description : "",
        defaultColor: Color.GOLD,
        colors: [Color.BRILLIANT_SILVER, Color.GOLD],
        manufacturer: Manufacturer.BBS,
        price: 599,
        stock: 8,
        imageUrl: '../../assets/images/products/bbs-superrs-gold.jpg',
      },
      {
        id: 'BBS-LM273',
        name : "BBS LM273",
        description : "",
        type: Type.RIM,
        defaultColor: Color.BRILLIANT_SILVER,
        colors: [Color.BRILLIANT_SILVER],
        manufacturer: Manufacturer.BBS,
        price: 499,
        stock: 10,
        imageUrl: '../../assets/images/products/bbs-lm273.jpg',
      },
      {
        id: 'BBS-CHR',
        name : "BBS CHR",
        description : "BBS CHR",
        type: Type.RIM,
        defaultColor: Color.BRILLIANT_SILVER,
        colors: [Color.BRILLIANT_SILVER],
        manufacturer: Manufacturer.BBS,
        price: 599,
        stock: 11,
        imageUrl: '../../assets/images/products/bbs-chr.jpg',
      },
      {
        id: 'ENKEL-IZUMO',
        name : "Enkel Izumo",
        description : "",
        type: Type.RIM,
        defaultColor: Color.BLACK,
        colors: [Color.BLACK],
        manufacturer: Manufacturer.ENKEI,
        price: 599,
        stock: 11,
        imageUrl: '../../assets/images/products/enkei-izumo.png',
      },
      {
        id: 'ENKEL-NAGATO',
        name : "Enkel Nagato",
        description : "Enkel Nagato",
        type: Type.RIM,
        defaultColor: Color.BRILLIANT_SILVER,
        colors: [Color.BRILLIANT_SILVER],
        manufacturer: Manufacturer.ENKEI,
        price: 599,
        stock: 5,
        imageUrl: '../../assets/images/products/enkei-wakasa.png',
      },
      {
        id: 'ENKEL-WAKASA',
        name : "Enekl Wakasa",
        description : "Enekl Wakasa",
        type: Type.RIM,
        defaultColor: Color.BRILLIANT_SILVER,
        colors: [Color.BRILLIANT_SILVER],
        manufacturer: Manufacturer.ENKEI,
        price: 599,
        stock: 5,
        imageUrl: '../../assets/images/products/enkei-wakasa.png',
      },
      {
        id: 'ENKEL-SHOGUN-FF',
        name : "Enkel Shogun FF",
        description : "Enkel Shogun FF",
        type: Type.RIM,
        defaultColor: Color.BLACK,
        colors: [Color.BLACK],
        manufacturer: Manufacturer.ENKEI,
        price: 599,
        stock: 5,
        imageUrl: '../../assets/images/products/enkei-wakasa.png',
      },
      {
        id: 'OZ-SUPERTURISMO',
        name : "OZ Superturismo",
        description : "OZ Superturismo Dakar",
        type: Type.RIM,
        defaultColor: Color.STAR_GRAPHITE,
        colors: [Color.STAR_GRAPHITE],
        manufacturer: Manufacturer.OZ,
        price: 899,
        stock: 4,
        imageUrl: '../../assets/images/products/oz-superturismo-stargraphite.jpg',
      },
      {
        id: 'OZ-SUPERTURISMO-DAKAR',
        name : "OZ Superturismo Dakar",
        description : "OZ Superturismo Dakar",
        type: Type.RIM,
        defaultColor: Color.SILVER,
        colors: [Color.SILVER],
        manufacturer: Manufacturer.OZ,
        price: 799,
        stock: 5,
        imageUrl: '../../assets/images/products/oz-superturimso-dakar.jpg',
      },
      {
        id: 'OZ-allggerita',
        name : "OZ Allggerita",
        description : "OZ Allggerita",
        type: Type.RIM,
        defaultColor: Color.SILVER,
        colors: [Color.SILVER],
        manufacturer: Manufacturer.OZ,
        price: 799,
        stock: 5,
        imageUrl: '../../assets/images/products/oz-alleggerita.jpg',
      },
      
    ];
  

    return {rims}
}


}
