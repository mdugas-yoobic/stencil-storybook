import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-tab-item',
  styleUrl: 'tabItem.css',
  shadow: true
})
export class GhNavItem {
  @Prop() index!: number;

  @Event() tabItemClicked: EventEmitter<number>;

  onClickHandler() {
    console.log('event');
    this.tabItemClicked.emit(this.index);
  }

  render() {
    return (
      <a href="#" onClick={this.onClickHandler.bind(this)}>
        <slot />
        <hr />
      </a>
    );
  }
}
