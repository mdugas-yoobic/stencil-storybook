import { Component, Event, EventEmitter,h} from '@stencil/core';

@Component({
    tag: 'todo-section',
})
export class TodoSection {

    @Event({bubbles: true}) clearListEvent: EventEmitter;

    onClearClick = () => {
        this.clearListEvent.emit();
    }

    render() {
        return (
<cdiv>
<h1>To-Do Tool</h1>
<button onClick={this.onClearClick}>Clear</button>
<item-list delay={1000}></item-list>
</cdiv>
        );
    }
}
