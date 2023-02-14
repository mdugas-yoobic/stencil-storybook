import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-header',
  styleUrl: 'header.css',
  shadow: true
})
export class GhHeader {
  @Prop() items: string[];
  @Prop() placeholder: string;

  render() {
    return (
      <header>
        <gh-input placeholder={this.placeholder}></gh-input>
        <gh-navbar items={this.items} class={'inverted'}></gh-navbar>
      </header>
    );
  }
}
