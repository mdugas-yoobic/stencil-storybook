import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-dropdown',
  styleUrl: 'dropdown.css',
  shadow: true
})
export class GhDropdown {
  @Prop({ reflect: true }) size = '';

  render() {
    return <slot />;
  }
}
