import { Component, OnInit } from '@angular/core';
import { Task } from '../to-do-list/task.model'
@Component({
  selector: 'todo',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public items = [];
  public newTask;

  public addToList() {
      if (this.newTask == '') {
      }
      else {
          this.items.push(this.newTask);
          this.newTask = '';
      }
  }

  public deleteTask(index) {
      this.items.splice(index, 1);
  }

  ngOnInit(): void {
  }  

}
