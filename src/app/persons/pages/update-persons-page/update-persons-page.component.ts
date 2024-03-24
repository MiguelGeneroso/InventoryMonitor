import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { PersonsService } from '../../services/persons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-persons-page',
  templateUrl: './update-persons-page.component.html',
  styleUrl: './update-persons-page.component.css'
})
export class UpdatePersonsPageComponent implements OnInit{

  public person!: Person;

  constructor(
    private personService: PersonsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.person = history.state.person;
      console.log(this.person);
    });
  }

  updatePerson(updatedPerson: Person) {
    this.personService.updatePerson(updatedPerson)
    .subscribe(person => {
      console.log(person);
    })
  }
}
