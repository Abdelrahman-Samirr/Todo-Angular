import { Component, EventEmitter, output } from '@angular/core';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Todo {
  id: number;
  title: string;
  status: string
}

@Component({
  selector: 'app-todoform',
  imports: [FormsModule],
  templateUrl: './todoform.html',
  styleUrl: './todoform.scss',
})


export class Todoform {
  taskName!: string;

  static ID: number = 0

  // todo: Todo = { id: 0, title: '', status: '' };

  @Output() dataEvent = new EventEmitter<Todo>();

  sendData() {

    if (!this.taskName) {

      alert('Please enter your task name')

      return
    }

    const todo: Todo = {
      id: Todoform.ID++,
      title: this.taskName,
      status: 'pending',
    };

    this.dataEvent.emit(todo);
    this.taskName = ""

  }
}
