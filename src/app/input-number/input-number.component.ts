import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { server } from '../server-list/server';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  
  @Input()
  quantity!: number;

  @Input()
  max!: number;
  ngOnInit(): void {
  }

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
  
  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
      this.maxReached.emit("se alcanzo el maximo")

  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event): void{
    //console.log(event);
    if(event.key > this.max){
      alert('No se puede pedir mas de los disponibles');
      this.quantityChange.emit(this.quantity);
      event.preventDefault();
    }
  }

}
