import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-dropdown-modal',
  styleUrl: 'dropdown-modal.css',
  shadow: true
})
export class GhDropdownModal {
  @Prop({ reflect: true }) size = '';

  render() {
    return <div></div>;
  }
}
