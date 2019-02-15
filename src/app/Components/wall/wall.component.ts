import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  todos :Todo[];
  constructor(private todoService: TodoService) { }


  ngOnInit() { this.todos=this.todoService.GetTodos();
  }

  AddTodo(todoText: HTMLInputElement) {
    const obj = {
      text: todoText.value,
      createdAt: new Date()
    };
    this.todoService.AddTodo(obj);
    todoText.value='';
  }

  RemoveTodo(todo) { this.todoService.RemoveTodo(todo);
  }


}
