import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { PersonsService } from '../../services/persons.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../items/intefaces/item';

@Component({
  selector: 'app-update-persons-page',
  templateUrl: './update-persons-page.component.html',
  styleUrl: './update-persons-page.component.css'
})
export class UpdatePersonsPageComponent implements OnInit{

  public person!: Person;
  public items: Item[] = [];

  constructor(
    private personService: PersonsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.person = history.state.person;
      console.log(this.person);
    });

    this.loadItemsPerson();
  }

  updatePerson(updatedPerson: Person) {
    this.personService.updatePerson(updatedPerson)
    .subscribe(person => {
      console.log(person);
    })
  }

  private loadItemsPerson(){
    this.personService.getPersonItems(this.person.dni)
    .subscribe(items => {
      this.items = items;
    })
  }
}
