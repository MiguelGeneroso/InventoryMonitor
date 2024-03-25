import { Component } from '@angular/core';
import { Item } from '../../intefaces/item';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-items-page',
  templateUrl: './show-items-page.component.html',
  styleUrl: './show-items-page.component.css'
})
export class ShowItemsPageComponent {

  public items: Item[] = [];

  constructor(
    private itemService: ItemsService,
    private router: Router
  ){
    this.loadItems();
  }

  ngOnInit(): void {

  }

  public searchById(id: string){
    this.itemService.getItemById(id)
    .subscribe(item => {
      console.log(item);
      if(item !== null){
        this.items = [item];
      }else{
        this.items = [];
      }
    })
  }

  loadItemsForm(item: Item){
    console.log(item);
    this.router.navigateByUrl('/items/update-items');
    this.router.navigateByUrl('/items/update-items', { state: { item: item } })
  }

  private loadItems(){
    this.itemService.getItems()
    .subscribe(items => {
      console.log(items);
      this.items = items;
    })
  }
}
