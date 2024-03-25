import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowItemsPageComponent } from './pages/show-items-page/show-items-page.component';
import { CreateItemsPageComponent } from './pages/create-items-page/create-items-page.component';
import { UpdateItemsPageComponent } from './pages/update-items-page/update-items-page.component';

const routes: Routes = [
  {
    path: 'show-items',
    component: ShowItemsPageComponent
  },
  {
    path: 'create-items',
    component: CreateItemsPageComponent
  },
  {
    path: 'update-items',
    component: UpdateItemsPageComponent
  },
  {
    path: '**',
    redirectTo: 'show-items'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
