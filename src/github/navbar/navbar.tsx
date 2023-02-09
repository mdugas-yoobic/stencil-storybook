import { Component, h } from '@stencil/core';

@Component({
  tag: 'x-navbar',
  styleUrl: 'navbar.css',
  shadow: true
})
export class XNavBar {
  render() {
    return (
      <div>
        <x-nav-item>Test</x-nav-item>
        <x-nav-item class={'inverted'}>test2 encore</x-nav-item>
      </div>
    );
  }
}
