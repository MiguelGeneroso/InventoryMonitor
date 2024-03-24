import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPersonsPageComponent } from './pages/show-persons-page/show-persons-page.component';
import { SharedModule } from '../shared/shared.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonsTableComponent } from './components/persons-table/persons-table.component';
import { CreatePersonsPageComponent } from './pages/create-persons-page/create-persons-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonsFormComponent } from './components/persons-form/persons-form.component';
import { UpdatePersonsPageComponent } from './pages/update-persons-page/update-persons-page.component';



@NgModule({
  declarations: [
    ShowPersonsPageComponent,
    PersonsTableComponent,
    CreatePersonsPageComponent,
    PersonsFormComponent,
    UpdatePersonsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
