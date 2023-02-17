import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-icon',
  styleUrl: 'icon.css',
  assetsDirs: ['assets'],
  scoped: true
})
export class GhIcon {
  @Prop({ reflect: true }) type: string;
  @Prop() color = '';

  render() {
    return <i class={this.type} style={{ color: this.color }}></i>;
  }
}
