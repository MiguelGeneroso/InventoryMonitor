import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowItemsPageComponent } from './pages/show-items-page/show-items-page.component';
import { ItemsTableComponent } from '../shared/components/items-table/items-table.component';
import { ItemsRoutingModule } from './items-routing.module';
import { CreateItemsPageComponent } from './pages/create-items-page/create-items-page.component';
import { UpdateItemsPageComponent } from './pages/update-items-page/update-items-page.component';
import { ItemsFormComponent } from './components/items-form/items-form.component';
import { PersonModule } from '../persons/person.module';



@NgModule({
  declarations: [
    ShowItemsPageComponent,
    CreateItemsPageComponent,
    UpdateItemsPageComponent,
    ItemsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
  ],
})
export class ItemsModule { }
