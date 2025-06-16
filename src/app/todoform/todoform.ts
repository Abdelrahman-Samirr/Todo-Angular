import { Component, EventEmitter, output } from '@angular/core';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  imports: [FormsModule],
  templateUrl: './todoform.html',
  styleUrl: './todoform.scss',
})
export class Todoform {
  taskName!: string;
  todo: object = {};
  @Output() dataEvent = new EventEmitter<object>();

  sendData() {
    this.todo = {
      id: 1,
      title: this.taskName,
      status: 'pinnding',
    };
    this.dataEvent.emit(this.todo);
    console.log(this.todo);
  }
}
