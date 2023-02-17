import { Component, h, Listen, Prop } from '@stencil/core';

import { Item } from '../todoItem/todoItem';

@Component({
  tag: 'todo-complete',
  styleUrl: 'todoComplete.css',
  shadow: true
})
export class TodoComplete {
  maxId = 0;

  @Prop() todoItems: Item[] = [];

  createNewTodo() {
    this.maxId++;
    this.todoItems = [...this.todoItems, { id: this.maxId, description: 'new todo', isDone: false }];
  }

  @Listen('updatedDescription')
  updatedDescriptionHandler(event) {
    console.log('should update ' + (event.detail as Item));
    this.todoItems.forEach((element) => console.log(element));
    this.todoItems = this.todoItems.map((item) => {
      if (item.id === event.detail.id) {
        return { ...item, description: event.detail.description };
      } else {
        return item;
      }
    });
    this.todoItems.forEach((element) => console.log(element));
  }

  @Listen('shouldDelete')
  shouldDeleteHandler(event) {
    console.log('should delete ' + event.detail);
    this.todoItems = this.todoItems.filter((item) => {
      console.log(item.id + '  ' + event.detail + (item.id !== event.detail));
      return item.id !== event.detail;
    });
    this.todoItems.forEach((element) => console.log(element));
  }

  render() {
    return (
      <div>
        <x-button onClick={this.createNewTodo.bind(this)}>Add</x-button>
        <ul>
          {this.todoItems.map((todo) => (
            <todo-item key={todo.id} description={todo.description} uuid={todo.id} done={todo.isDone}></todo-item>
          ))}
        </ul>
      </div>
    );
  }
}
