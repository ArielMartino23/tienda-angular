import { Component, OnInit } from '@angular/core';
import { ServerCartService } from '../server-cart.service';
import { server } from './server';


@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  servers: server[] =[
    {
      nombre:"Kelthuzad",
      MMO:"World of Warcraft",
      Maxplayers:25000,
      Precio: 1000,
      image:"assets/kelthuzad.jpg",
      onsale: false,
      available: 5,
      quantity: 0,
    },
    {
      nombre:"Chilling reign",
      MMO:"Pokemmo",
      Maxplayers:10000,
      Precio: 500,
      image:"assets/kelthuzad.jpg",
      onsale: true,
      available: 2,
      quantity: 0,
    },
    {
      nombre:"Agaton",
      MMO:"Lost Ark",
      Maxplayers:7500,
      Precio: 0,
      image:"assets/kelthuzad.jpg",
      onsale: false,
      available: 0,
      quantity: 0,
    }
  ];

  
  constructor(private cart: ServerCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(server): void{
    this.cart.addToCart(server);
    server.available -= server.quantity;
    server.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }

}
