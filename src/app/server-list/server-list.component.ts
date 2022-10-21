import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(server : server): void {
    if(server.quantity < server.available)
      server.quantity++;
  }

  downQuantity(server : server): void {
    if(server.quantity > 0)
      server.quantity--;
  }

  onChangeQuantity(event, server : server): void{
    //console.log(event);
    if(event.key > server.available){
      alert('No se puede pedir mas de los disponibles');
      event.preventDefault();
    }
  }
}
