import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Product } from '../interface/product';


@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  disabled:any;
  compra:string;

  @Input() product!: Product;
  @Output() camisetaComprada : EventEmitter<Product> = new EventEmitter
  constructor(){
    this.disabled = false;
    this.compra = "";
  }

  bought(){
    this.disabled =true;
    this.compra = "Comprado"
    this.camisetaComprada.emit(this.product);
  }

  isdisabled(){
    return this.disabled;
  }
  ngOnInit(): void {
    this.compra = "Comprar"
  }
}
