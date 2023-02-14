import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-icon-tag',
  styleUrl: 'icon-tag.css',
  shadow: true
})
export class GhIconTag {
  @Prop() iconColor: string;

  render() {
    return [<gh-icon type="small-circle" color={this.iconColor}></gh-icon>, <slot />];
  }
}
