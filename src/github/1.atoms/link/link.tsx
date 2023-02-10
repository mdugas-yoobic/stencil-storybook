import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-a',
  styleUrl: 'link.css',
  shadow: true
})
export class GhA {
  @Prop({ reflect: true }) align: string;
  @Prop() url: string;

  render() {
    return (
      <a href={this.url} target={'_blank'}>
        <slot />
      </a>
    );
  }
}
