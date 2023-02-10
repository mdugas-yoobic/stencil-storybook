import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'gh-dropdown-button',
  styleUrl: 'dropdown-button.css',
  shadow: true
})
export class GhDropdownButton {
  @Prop() buttonName!: string;

  @Prop() class = '';
  @Prop() dropdownSize = '';
  @State() showDropdown = false;

  toggleDropdown() {
    console.log('click');
    this.showDropdown = !this.showDropdown;
  }

  render() {
    return (
      <div class={this.class}>
        <gh-button onClick={this.toggleDropdown.bind(this)}>{this.buttonName}</gh-button>
        {this.showDropdown && (
          <gh-dropdown-modal size={this.dropdownSize}>
            <slot />
          </gh-dropdown-modal>
        )}
      </div>
    );
  }
}
