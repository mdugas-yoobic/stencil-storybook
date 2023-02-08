import { Component, h, Listen, Prop,State , Watch} from '@stencil/core';

// a user defined, complex type describing an 'ItemStuff'
type ItemStuff = {
    id: number;
    description: string,
}

@Component({
    tag: 'item-list',
})
export class ItemList {

    // Delay between items added
    @Prop() delay = 1000;

    // `timer` is not decorated with `@State()`, as
    // we do not wish to trigger a rerender when its
    // value changes
    timer: number;

    // `items` will trigger a rerender if
    // the value assigned to the variable changes
    @State() items: ItemStuff[] = [];

    @Watch('delay')
    startTimer() {
        if(this.timer)
        {
            window.clearInterval(this.timer);
        }
        // the assignment to `this.timer` will not
        // trigger a re-render
        this.timer = window.setInterval(() => {
            const newTodo: ItemStuff = {
                description: "ItemStuff",
                id: this.items.length + 1
            };
            // the assignment to `this.items` will
            // trigger a re-render. the assignment
            // using '=' is important here, as we
            // need that to make sure the rerender
            // occurs
            this.items = [...this.items, newTodo];
        }, this.delay);

    }

    @Listen('clearListEvent', {target: 'body'})
    clearList() {
        this.items = [];
    }

    connectedCallback() {
        this.startTimer();
    }

    disconnectedCallback() {
        window.clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h3>To-Do List {this.delay}</h3>
                <ul>
                    {this.items.map((todo) => <li>{todo.description} #{todo.id}</li>)}
                </ul>
            </div>
        );
    }
}
