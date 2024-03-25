import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonsTableComponent } from './components/persons-table/persons-table.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBoxComponent,
    PersonsTableComponent,
    ItemsTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    SearchBoxComponent,
    PersonsTableComponent,
    ItemsTableComponent
  ]
})
export class SharedModule { }
