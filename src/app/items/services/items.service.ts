import { Injectable } from '@angular/core';
import { ComunicationService } from '../../shared/services/comunication.service';
import { Observable } from 'rxjs';
import { Item } from '../intefaces/item';
import { Person } from '../../persons/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private basePath: string;

  constructor(
    private comunicationService: ComunicationService,
  ) {
    this.basePath = 'http://localhost:8080/';
   }

   public getItems(): Observable<Item[]> {
    const url = this.basePath + 'items';
    return this.comunicationService.get(url);
   }

   public getItemById(id: string): Observable<Item> {
    const url = this.basePath + 'items/' + id;
    return this.comunicationService.get(url);
   }

   public getOwnerItem(id: string): Observable<Person> {
    const url = this.basePath + 'persons/items/' + id;
    return this.comunicationService.get(url);
   }

   public createItem(newItem: Item): Observable<Item> {
    const items = [newItem];
    const url = this.basePath + 'items';
    return this.comunicationService.post(url, items);
   }

   public updateItem(item: Item): Observable<Item> {
    const url = this.basePath + 'items/' + item.id;
    return this.comunicationService.put(url, item);
   }

   public deleteItem(item: Item): Observable<Item> {
    const url = this.basePath + 'items/' + item.id;
    return this.comunicationService.delete(url);
   }
}
