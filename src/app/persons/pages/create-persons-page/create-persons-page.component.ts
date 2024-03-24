import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonsService } from '../../services/persons.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-create-persons-page',
  templateUrl: './create-persons-page.component.html',
  styleUrl: './create-persons-page.component.css'
})
export class CreatePersonsPageComponent {

  constructor(
    private personService: PersonsService
    ) {}

  createPerson(newPerson: Person) {
    console.log(newPerson);
    this.personService.createPerson(newPerson)
    .subscribe(person => {
      console.log(person);
    })
  }
}
