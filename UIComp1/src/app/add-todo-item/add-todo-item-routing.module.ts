import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTodoItemPage } from './add-todo-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddTodoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTodoItemPageRoutingModule {}
