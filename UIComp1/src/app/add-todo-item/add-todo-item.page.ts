import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.page.html',
  styleUrls: ['./add-todo-item.page.scss'],
})

export class AddTodoItemPage {
  todoItem!: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  save() {
    // Pass the new todo item back to the previous page
    this.navCtrl.pop().then(() => {
      let data = { todo: this.todoItem };
      this.navParams.get('onSave')(data);
    });
  }
}

