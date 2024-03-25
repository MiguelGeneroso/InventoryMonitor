import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../intefaces/item';

@Component({
  selector: 'app-create-items-page',
  templateUrl: './create-items-page.component.html',
  styleUrl: './create-items-page.component.css'
})
export class CreateItemsPageComponent {

  constructor(
    private itemService: ItemsService
    ) {}

  createItem(newItem: Item) {
    console.log(newItem);
    this.itemService.createItem(newItem)
    .subscribe(item => {
      console.log('HOLA: ' + item);
    })
  }
}
