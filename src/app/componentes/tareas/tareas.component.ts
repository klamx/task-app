import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  tasksList: Task[] = [];
  taskInput: string;
  edit: boolean = false;
  id: number = null;

  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    if (this.taskInput.trim() === '') {
      this.taskInput = null;
      return;
    }
    const task = new Task(this.taskInput);
    this.tasksList = [...this.tasksList, task];
    this.taskInput = null;
  }

  theresTasks(): boolean {
    return this.tasksList.length > 0;
  }

  markTask(task: Task): void {
    task.state = !task.state;
  }

  deleteTask(task: Task): void {
    const len = this.tasksList.indexOf(task);
    this.tasksList.splice(len, 1);
  }

  updateTask(): void {
    this.tasksList[this.id].name = this.taskInput;
    this.id = null;
    this.taskInput = null;
  }

  toogleEdit(task: Task): void {
    this.id = task.id;
    this.taskInput = task.name;
  }
}
