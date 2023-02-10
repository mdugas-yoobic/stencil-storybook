import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-nav-item',
  styleUrl: 'navItem.css',
  shadow: true
})
export class GhNavItem {
  @Prop() class: string;

  render() {
    return (
      <a href="#" class={this.class}>
        <slot />
      </a>
    );
  }
}
