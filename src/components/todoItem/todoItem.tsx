import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todoItem.css',
  shadow: true
})
export class TodoItem {

  @Prop() description: string;
  @State() done: boolean;

  textInput!: HTMLInputElement;
  editBtn!: HTMLButtonElement;

  onClickDone() {
    this.done = true;
    this.editBtn.disabled = true;
    this.textInput.disabled = true;
  }

  onClickEdit() {
    this.textInput.disabled = false;
    this.textInput.focus();
    this.textInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.textInput.disabled = true;
        this.description = this.textInput.value;
      }
    });
  }

  render() {
    const spanClass = this.done ? 'done' : 'todo';
    return (
      <li>
        <button onClick={this.onClickDone.bind(this)}>Done</button>
        <input class={spanClass} disabled value={this.description} ref={(el) => this.textInput = el as HTMLInputElement} />
        <button onClick={this.onClickEdit.bind(this)} ref={(el) => this.editBtn = el as HTMLButtonElement}>Edit</button>
      </li>
    );
  }
}
