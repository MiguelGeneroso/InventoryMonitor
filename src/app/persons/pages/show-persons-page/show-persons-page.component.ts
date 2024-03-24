import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { PersonsService } from '../../services/persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-persons-page',
  templateUrl: './show-persons-page.component.html',
  styleUrl: './show-persons-page.component.css'
})
export class ShowPersonsPageComponent implements OnInit {

  public persons: Person[] = [];

  constructor(
    private personService: PersonsService,
    private router: Router
  ){
    this.loadPersons();
  }

  ngOnInit(): void {

  }

  public searchByName(dni: string){
    this.personService.getPersonByDni(dni)
    .subscribe(person => {
      console.log(person);
      if(person !== null){
        this.persons = [person];
      }else{
        this.persons = [];
      }
    })
  }

  loadPersonForm(person: Person){
    console.log(person);
    // this.router.navigateByUrl('/persons/update-persons');
    this.router.navigateByUrl('/persons/update-persons', { state: { person: person } })
  }

  private loadPersons(){
    this.personService.getPersons()
    .subscribe(persons => {
      console.log(persons);
      this.persons = persons;
    })
  }

}
