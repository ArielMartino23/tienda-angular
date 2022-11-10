import { Component, OnInit } from '@angular/core';
import { ServerCartService } from '../server-cart.service';
import { ServerDataService } from '../server-data.service';
import { server } from './server';


@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  servers: server[] = [];

  
  constructor(
    private cart: ServerCartService,
    private serversDataService: ServerDataService) {
  }

  ngOnInit(): void {
    this.serversDataService.getAll()
     .subscribe(servers => this.servers = servers)
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
