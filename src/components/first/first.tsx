import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'first-comp'
})
export class MyComponent {
  // Indicate that name should be a public property on the Component
  @Prop() name: string;

  render() {
    return <p>My name is {this.name}</p>;
  }
}
