import { Component, h } from '@stencil/core';

@Component({
  tag: 'gh-nav-item',
  styleUrl: 'navItem.css',
  shadow: true
})
export class GhNavItem {
  render() {
    return (
      <a href="#">
        <slot />
      </a>
    );
  }
}
