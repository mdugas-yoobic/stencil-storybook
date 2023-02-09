import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export type Item = {
  id: number;
  description: string;
  isDone: boolean;
};

@Component({
  tag: 'todo-item',
  styleUrl: 'todoItem.css',
  shadow: true
})
export class TodoItem {
  @Prop() uuid!: number;
  @Prop() description: string;
  @Prop() done: boolean;

  item: Item;
  // @Element() todoItemEl: HTMLElement;

  textInput!: HTMLInputElement;

  updateItem() {
    this.item = { id: this.uuid, description: this.description, isDone: this.done };
  }

  componentDidLoad() {
    this.textInput.addEventListener('focusout', () => {
      if (!this.textInput.disabled) this.saveEdit();
    });
    this.textInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') this.saveEdit();
    });
    this.updateItem();
  }

  onClickDone() {
    this.done = true;
    this.textInput.disabled = true;
    this.updateItem();
  }

  saveEdit() {
    this.textInput.disabled = true;
    this.description = this.textInput.value;
    this.updateItem();
    this.updatedDescription.emit(this.item);
  }

  onClickEdit() {
    this.textInput.disabled = false;
    this.textInput.focus();
  }

  @Event() shouldDelete: EventEmitter<number>;

  onClickDelete() {
    console.log('emited delete ' + this.uuid);
    this.shouldDelete.emit(this.uuid);
  }

  @Event() updatedDescription: EventEmitter<Item>;

  render() {
    const spanClass = this.done ? 'done' : 'todo';
    return (
      <li>
        <x-button onClick={this.done ? null : this.onClickDone.bind(this)} enable={!this.done}>
          Done
        </x-button>
        <input class={spanClass} disabled value={this.description} ref={(el) => (this.textInput = el as HTMLInputElement)} />
        <x-button onClick={this.done ? null : this.onClickEdit.bind(this)} enable={!this.done}>
          Edit
        </x-button>
        <x-button onClick={this.onClickDelete.bind(this)} enable={true}>
          Delete
        </x-button>
      </li>
    );
  }
}
