import { Component } from '@angular/core';
import { Todoform } from '../todoform/todoform';
import { Todolist } from '../todolist/todolist';

@Component({
  selector: 'app-parent',
  imports: [Todoform, Todolist],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  arr: any[] = [];

  receiveMessage(event: any) {
    this.arr.push(event);
    console.log(this.arr);
  }
}
