import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-tab-item',
  styleUrl: 'tabItem.css',
  shadow: true
})
export class GhNavItem {
  render() {
    return (
      <a href="#">
        <slot />
        <hr />
      </a>
    );
  }
}
