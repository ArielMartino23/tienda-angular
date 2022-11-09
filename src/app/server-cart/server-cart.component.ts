import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ServerCartService } from '../server-cart.service';
import { server } from '../server-list/server';

@Component({
  selector: 'app-server-cart',
  templateUrl: './server-cart.component.html',
  styleUrls: ['./server-cart.component.scss']
})
export class ServerCartComponent implements OnInit {

  cartList$: Observable<server[]>;
  constructor(private cart: ServerCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
