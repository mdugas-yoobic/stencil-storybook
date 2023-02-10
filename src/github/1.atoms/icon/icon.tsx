import { Component, h, Prop } from '@stencil/core';

export type TIcons = 'folder' | 'file' | 'user';

@Component({
  tag: 'gh-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class GhIcon {
  @Prop() type: TIcons;

  render() {
    return <span class={this.type}></span>;
  }
}
