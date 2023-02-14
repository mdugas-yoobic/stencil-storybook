import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-input',
  styleUrl: 'input.css',
  shadow: true
})
export class GhInput {
  @Prop() placeholder: string;
  @Prop() url: string;

  render() {
    return (
      <div>
        <input placeholder={this.placeholder}></input>
      </div>
    );
  }
}
