import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPersonsPageComponent } from './pages/show-persons-page/show-persons-page.component';
import { CreatePersonsPageComponent } from './pages/create-persons-page/create-persons-page.component';
import { UpdatePersonsPageComponent } from './pages/update-persons-page/update-persons-page.component';

const routes: Routes = [
  {
    path: 'show-persons',
    component: ShowPersonsPageComponent
  },
  {
    path: 'create-persons',
    component: CreatePersonsPageComponent
  },
  {
    path: 'update-persons',
    component: UpdatePersonsPageComponent
  },
  {
    path: '**',
    redirectTo: 'show-persons'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
