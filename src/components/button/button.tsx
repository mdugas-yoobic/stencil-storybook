import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'x-button',
  styleUrl: 'button.css',
  shadow: true
})
export class BtnComp {
  // Indicate that name should be a public property on the Component
  @Prop() enable = true;

  render() {
    return (
      <button disabled={!this.enable}>
        <slot />
      </button>
    );
  }
}
