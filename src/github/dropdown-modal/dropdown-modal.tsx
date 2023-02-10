import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-dropdown-modal',
  styleUrl: 'dropdown-modal.css',
  shadow: true
})
export class GhDropdownModal {
  @Prop() class = 'modal';
  @Prop() size = '';

  render() {
    return <div class={this.class + ' ' + this.size}></div>;
  }
}
