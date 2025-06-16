import { Component } from '@angular/core';
import { Todoform } from '../todoform/todoform';
import { Todolist } from '../todolist/todolist';
import { Todo } from '../todoform/todoform';

@Component({
  selector: 'app-parent',
  imports: [Todoform, Todolist],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {

  arr: Todo[] = [];

  receiveMessage(event: Todo) {

    this.arr.push(event);

  }

  deleteTask(id:number){

    this.arr = this.arr.filter(item => item.id !== id )
  }

}
