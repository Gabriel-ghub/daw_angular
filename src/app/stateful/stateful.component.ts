import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ShopModel } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})

export class StatefulComponent implements OnInit {
  shopModel: ShopModel = new ShopModel();
  boughtItems: Array<Product>;
  constructor() {
    this.boughtItems = [];
  }
  ngOnInit(): void {}
  clickItem(camiseta: any) {
    this.boughtItems.push(camiseta);
  }
}
