import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-navbar',
  styleUrl: 'navbar.css',
  shadow: true
})
export class GhNavbar {
  @Prop() class = '';

  @Prop() items: string[];

  render() {
    return (
      <nav class={this.class}>
        {this.items.map((item) => (
          <gh-nav-item class={this.class}>{item}</gh-nav-item>
        ))}
      </nav>
    );
  }
}
