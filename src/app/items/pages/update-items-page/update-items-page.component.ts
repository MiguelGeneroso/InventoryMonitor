import { Component } from '@angular/core';
import { Item } from '../../intefaces/item';
import { ItemsService } from '../../services/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../../persons/interfaces/person';

@Component({
  selector: 'app-update-items-page',
  templateUrl: './update-items-page.component.html',
  styleUrl: './update-items-page.component.css'
})
export class UpdateItemsPageComponent {

  public item!: Item;
  public persons: Person[] = [];

  constructor(
    private itemService: ItemsService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = history.state.item;
      console.log(this.item);
    });
    this.loadItemOwner();
  }

  updateItem(item: any) {

    if(item.option === 'delete'){
      this.itemService.deleteItem(item.item)
      .subscribe(item => {
        this.router.navigateByUrl('items/show-items');
      })
    }else{
      this.itemService.updateItem(item.item)
      .subscribe(item => {
        console.log(item);
      })
    }

  }

  private loadItemOwner(){
    if(this.item.id){
      this.itemService.getOwnerItem(this.item.id)
      .subscribe(persons => {
        this.persons = [persons];
      })
    }
  }
}
