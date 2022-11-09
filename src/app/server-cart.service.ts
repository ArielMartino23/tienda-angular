import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { server } from './server-list/server';

/*
*maneja la logica del carrito
*/

@Injectable({
  providedIn: 'root'
})
export class ServerCartService {

  private _cartList: server[] = [];

  cartList: BehaviorSubject<server[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(server: server) {

    let item: server;

    item = this._cartList.find((v1) => v1.nombre == server.nombre)!;

    if(!item){
      this._cartList.push({... server});
    }else {
      item.quantity +=  server.quantity;
    }
    /*this.cartList.push(server);*/
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  
}
