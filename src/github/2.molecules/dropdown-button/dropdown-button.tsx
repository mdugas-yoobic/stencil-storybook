import { Component, Element, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'gh-dropdown-button',
  styleUrl: 'dropdown-button.css',
  shadow: true
})
export class GhDropdownButton {
  @Prop() buttonClass: string;

  @Prop() dropdownSize = 'small';
  @Prop() dropdownAlign = 'align-left';
  @State() showDropdown = false;

  @Element() dropdown: HTMLElement;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  @Listen('click', { target: 'document' })
  outsideClick(event: MouseEvent) {
    if (this.showDropdown && !event.composedPath().includes(this.dropdown)) {
      this.showDropdown = false;
    }
  }

  render() {
    return (
      <div>
        <gh-button onClick={this.toggleDropdown.bind(this)} class={this.buttonClass}>
          <slot name="button" />
        </gh-button>
        {this.showDropdown && (
          <gh-dropdown class={this.dropdownAlign} size={this.dropdownSize}>
            <slot name="dropdown" />
          </gh-dropdown>
        )}
      </div>
    );
  }
}
