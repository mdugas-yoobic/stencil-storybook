import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-button',
  styleUrl: 'button.css',
  shadow: true
})
export class GhButton {
  @Prop() class: string;

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
