import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'gh-pourcentage-bar',
  styleUrl: 'pourcentage-bar.css',
  shadow: true
})
export class GhPourcentageBar {
  @Prop() pourcentages: number[];
  @Prop() colors: string[];

  render() {
    return (
      <Host>
        {this.pourcentages.map((pourcentage, index) => (
          <span style={{ width: pourcentage + '%', background: this.colors[index] }}></span>
        ))}
      </Host>
    );
  }
}
