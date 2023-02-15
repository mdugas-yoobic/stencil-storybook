import { Component, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'gh-tabbar',
  styleUrl: 'tabbar.css',
  shadow: true
})
export class GhTabBar {
  @Prop() items: string[];

  @State() selectedItem: number;

  @Listen('tabItemClicked')
  onClickDetected(event: CustomEvent<number>) {
    this.selectedItem = event.detail;
  }

  render() {
    return (
      <nav>
        {this.items.map((item, index) => (
          <gh-tab-item class={index === this.selectedItem ? 'selected' : ''} index={index}>
            {item}
          </gh-tab-item>
        ))}
      </nav>
    );
  }
}
