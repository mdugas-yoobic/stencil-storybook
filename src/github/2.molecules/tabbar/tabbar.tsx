import { Component, h, Prop, State } from '@stencil/core';

import { TTabItemData } from '../../1.atoms/tab-item/tabItem';

@Component({
  tag: 'gh-tabbar',
  styleUrl: 'tabbar.css',
  shadow: true
})
export class GhTabBar {
  @Prop() tabItems: TTabItemData[];

  @State() selectedItem: number;

  render() {
    return (
      <nav>
        {this.tabItems.map((item, index) => (
          <gh-tab-item tabItem={item} class={index === this.selectedItem ? 'selected' : ''} onClick={() => (this.selectedItem = index)}></gh-tab-item>
        ))}
      </nav>
    );
  }
}
