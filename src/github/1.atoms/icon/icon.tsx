import { Component, h, Prop } from '@stencil/core';

export type TIcons = 'folder' | 'file' | 'user' | 'small-circle';

@Component({
  tag: 'gh-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class GhIcon {
  @Prop() type: TIcons;
  @Prop() color = '#f00';

  render() {
    return <span class={this.type} style={this.type === 'small-circle' ? { background: this.color } : null}></span>;
  }
}
