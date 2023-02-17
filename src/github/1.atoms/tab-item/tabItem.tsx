import { Component, h, Prop } from '@stencil/core';

export type TTabItemData = {
  name: string;
  icon?: string;
  iconColor?: string;
};
@Component({
  tag: 'gh-tab-item',
  styleUrl: 'tabItem.css',
  shadow: true
})
export class GhNavItem {
  @Prop() tabItem: TTabItemData;

  render() {
    return (
      <a href="#">
        {this.tabItem.icon ? <gh-icon type={this.tabItem.icon} color={this.tabItem.iconColor ?? null}></gh-icon> : null}
        {this.tabItem.name}
        <hr />
      </a>
    );
  }
}
