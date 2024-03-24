import { Injectable } from '@angular/core';
import { ComunicationService } from '../../shared/services/comunication.service';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private basePath: string;

  constructor(
    private comunicationService: ComunicationService,
  ) {
    this.basePath = 'http://localhost:8080/';
  }

  public getPersons(): Observable<Person[]>{
    const url = this.basePath + 'persons'
    return this.comunicationService.get(url);
  }

  public getPersonByDni(dni: string): Observable<Person> {
    const url = this.basePath + 'persons/' + dni;
    return this.comunicationService.get(url);
  }

  public createPerson(person: Person): Observable<Person> {
    const url = this.basePath + 'person';
    return this.comunicationService.post(url, person);
  }

  public updatePerson(person: Person): Observable<Person> {
    const url = this.basePath + 'person/' + person.dni;
    return this.comunicationService.put(url, person);
  }
}
