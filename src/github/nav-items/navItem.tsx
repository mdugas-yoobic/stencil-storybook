import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'x-nav-item',
  styleUrl: 'navItem.css',
  shadow: true
})
export class XNavItem {
  @Prop() class: string;

  render() {
    return (
      <a href="#" class={this.class}>
        <slot />
      </a>
    );
  }
}
