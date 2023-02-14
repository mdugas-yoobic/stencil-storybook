import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'gh-dropdown-button',
  styleUrl: 'dropdown-button.css',
  shadow: true
})
export class GhDropdownButton {
  @Prop() buttonName!: string;

  @Prop() dropdownSize = 'small';
  @Prop() dropdownAlign = 'align-left';
  @State() showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  render() {
    return (
      <div>
        <gh-button onClick={this.toggleDropdown.bind(this)}>{this.buttonName}</gh-button>
        {this.showDropdown && (
          <gh-dropdown-modal class={this.dropdownAlign} size={this.dropdownSize}>
            <slot />
          </gh-dropdown-modal>
        )}
      </div>
    );
  }
}
