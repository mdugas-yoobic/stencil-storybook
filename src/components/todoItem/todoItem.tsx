import { Component, h, Prop} from '@stencil/core';

// a user defined, complex type describing an 'Item'
export type Item = {
    id: number;
    description: string,
    done: boolean,
}

@Component({
    tag: 'todo-item',
    styleUrl: 'todoItem.css',
    shadow: true
})
export class TodoItem {

    @Prop() item: Item;
    textInput!: HTMLInputElement;
    editBtn!: HTMLButtonElement;

    defaultItem() {
        this.item = {id: 12, description: 'Item', done: false};
    }

    onClickDone(){
      this.item = {...this.item, done:true};
      this.editBtn.disabled = true;
      this.textInput.disabled = true;
    }

    onClickEdit(){
        this.textInput.disabled = false;
        this.textInput.focus();
        this.textInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
            this.disabled = true;
            }
            });
    }

    connectedCallback() {
        this.defaultItem();
    }

    render() {
        const spanClass = this.item.done ? 'done' : 'todo';
        return (
        <li>
          <button onClick={this.onClickDone.bind(this)}>Done</button>
          <input class={spanClass} disabled value={this.item.description} ref={(el) => this.textInput = el as HTMLInputElement}/>
          <button onClick={this.onClickEdit.bind(this)} ref={(el) => this.editBtn = el as HTMLButtonElement}>Edit</button>
        </li>
        );
    }
}
