import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../todoform/todoform';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss',
})
export class Todolist {

  @Input() items!: Todo[];

  @Output() deleteEvent = new EventEmitter<number>()

  deleteData(id:number){

    this.deleteEvent.emit(id)

  }

  completedData(id:number){
    const task = this.items.find(task => task.id === id );

    if(task){
      task.status = task.status === 'completed' ? 'pending' : 'completed'
    }
  }
  
}
