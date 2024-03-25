import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPersonsPageComponent } from './persons/pages/show-persons-page/show-persons-page.component';

const routes: Routes = [
  {
    path: 'persons',
    loadChildren: () => import('./persons/person.module').then(m => m.PersonModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
