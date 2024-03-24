import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'persons-form',
  templateUrl: './persons-form.component.html',
  styleUrl: './persons-form.component.css'
})
export class PersonsFormComponent implements OnChanges {

  @Input()
  public person: Person | null = null;

  @Output()
  public onValue: EventEmitter<Person> = new EventEmitter;
  formPerson!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) {
      console.log(this.person);
    }

  ngOnChanges(changes: SimpleChanges): void {
    if ('person' in changes && this.person) {
      console.log(this.person);
    }
  }

  ngOnInit() {

    this.initializeForm();

  }

  emitForm(){
    const personData = this.formPerson.getRawValue();
    console.log(JSON.stringify(personData));
    const newPerson: Person = {
      dni: personData.dni,
      name: personData.name,
      surname: personData.surname
    }

    if(!this.validateDNI(newPerson.dni)){
      this.formPerson.get('dni')?.setErrors({'invalidDNI': true});
      console.log('ERROR');
    }

    if (this.formPerson.valid) {


      this.onValue.emit(newPerson);

    }

  }

  private validateDNI(dni: string): boolean {
    console.log(dni);
    dni = dni.trim().toUpperCase();

    if (!dni.match(/^\d{8}[A-HJ-NP-TV-Z]$/)) {
      return false;
    }

    const number = dni.substring(0, 8);
    const letter = dni.charAt(8);

    const expectedLetter = this.calculateDNILetter(parseInt(number, 10));

    return letter === expectedLetter;
  }

  private calculateDNILetter(dniNumber: number): string {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letters.charAt(dniNumber % 23);
  }

  private initializeForm(): void {
    if (!this.person) {
      this.formPerson = this.formBuilder.group({
        dni: ['', Validators.required],
        name: ['', Validators.required],
        surname: ['', Validators.required]
      });
    } else {
      this.formPerson = this.formBuilder.group({
        dni: [{ value: this.person.dni, disabled: true }],
        name: [this.person.name, Validators.required],
        surname: [this.person.surname, Validators.required]
      });
    }
  }
}
