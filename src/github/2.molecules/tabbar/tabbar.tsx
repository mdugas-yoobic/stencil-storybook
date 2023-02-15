import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'gh-tabbar',
  styleUrl: 'tabbar.css',
  shadow: true
})
export class GhTabBar {
  @Prop() items: string[];

  @State() selectedItem: number;

  render() {
    return (
      <nav>
        {this.items.map((item, index) => (
          <gh-tab-item class={index === this.selectedItem ? 'selected' : ''} onClick={() => (this.selectedItem = index)}>
            {item}
          </gh-tab-item>
        ))}
      </nav>
    );
  }
}
