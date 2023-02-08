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


    defaultItem() {
        this.item = {id: 12, description: 'Item', done: false};
    }

    onClickDone(){
      this.item = {...this.item, done:true};
    }

    connectedCallback() {
        this.defaultItem();
    }

    render() {
        const spanClass = this.item.done ? 'done' : 'todo';
        return (
        <li>
          <button onClick={this.onClickDone.bind(this)}>Done</button>
          <span class={spanClass}>{this.item.description}</span>
        </li>
        );
    }
}
