import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../intefaces/item';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrl: './items-table.component.css'
})
export class ItemsTableComponent {
  @Input()
  public items: Item[] = [];

  @Output()
  public onValue: EventEmitter<Item> = new EventEmitter;

  constructor(){
    console.log('Objetos: ' + this.items)
    console.log("TIPO OBJETOS: " + typeof this.items)
  }

  selectItem(item: Item){
    console.log()
    this.onValue.emit(item);
  }
}
