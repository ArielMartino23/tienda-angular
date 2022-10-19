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

    },
    {
      nombre:"Chilling reign",
      MMO:"Pokemmo",
      Maxplayers:10000,
      Precio: 500,
      image:"assets/kelthuzad.jpg",
      onsale: true,
    },
    {
      nombre:"Agaton",
      MMO:"Lost Ark",
      Maxplayers:7500,
      Precio: 0,
      image:"assets/kelthuzad.jpg",
      onsale: false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
