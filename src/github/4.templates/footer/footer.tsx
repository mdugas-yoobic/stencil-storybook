import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'gh-footer',
  styleUrl: 'footer.css',
  shadow: true
})
export class GhFooter {
  @Prop() items: string[];

  render() {
    return (
      <Host>
        <hr />
        <footer>
          <span>&copy; 2023 Github, Inc.</span>
          {this.items.map((item) => (
            <gh-a class={'blue underline'}>{item}</gh-a>
          ))}
        </footer>
      </Host>
    );
  }
}
