import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';
import { ShopModel } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})
export class StatefulComponent implements OnInit {
  @ViewChild(ConfirmComponent,{static:false})
  confirmChild!:ConfirmComponent;
  shopModel: ShopModel = new ShopModel();
  boughtItems!: Array<Product>;
  constructor() {
    this.boughtItems = [];
  }
  ngOnInit(): void {}
  clickItem(camiseta: any) {
    this.boughtItems.push(camiseta);
  }

  camisetaComprada(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

  totalPrice() {
    console.log(this.boughtItems)
    if (this.boughtItems) {
      return this.boughtItems.reduce((prev, item:Product) => prev + item.price,0);
    } else {
      return 0;
    }
  }
}
