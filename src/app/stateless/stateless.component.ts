import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';


@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  disabled:any;
  compra:string;

  @Input() product: Product;
  constructor(){
    this.product = {};
    this.disabled = false;
    this.compra = "";
  }

  bought(){
    this.disabled =true;
    this.compra = "Comprado"
  }

  isdisabled(){
    return this.disabled;
  }
  ngOnInit(): void {
    this.compra = "Comprar"
  }
}
