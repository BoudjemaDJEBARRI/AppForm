import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTodoItemPageRoutingModule } from './add-todo-item-routing.module';

import { AddTodoItemPage } from './add-todo-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTodoItemPageRoutingModule
  ],
  declarations: [AddTodoItemPage]
})
export class AddTodoItemPageModule {}
