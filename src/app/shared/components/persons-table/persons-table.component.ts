import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../persons/interfaces/person';

@Component({
  selector: 'persons-table',
  templateUrl: './persons-table.component.html',
  styleUrl: './persons-table.component.css'
})
export class PersonsTableComponent {

  @Input()
  public persons: Person[] = [];

  @Output()
  public onValue: EventEmitter<Person> = new EventEmitter;

  constructor(){
    console.log('PERSONAS: ' + this.persons)
    console.log("TIPO PERSONAS: " + typeof this.persons)
  }

  selectPerson(person: Person){
    console.log()
    this.onValue.emit(person);
  }

}
