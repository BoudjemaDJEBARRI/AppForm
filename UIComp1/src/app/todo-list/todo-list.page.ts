import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})

export class TodoListPage {
  todoList: string[] = [];
  alertCtrl: any;

  add() {
    // Show a prompt to allow the user to enter a new todo item
    let prompt = this.alertCtrl.create({
      title: 'New Todo Item',
      inputs: [
        {
          name: 'todo',
          placeholder: 'Todo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {}
        },
        {
          text: 'Save',
          handler: (data: { todo: string; }) => {
            // Add the new todo item to the list
            this.todoList.push(data.todo);
          }
        }
      ]
    });
    prompt.present();
  }
}
