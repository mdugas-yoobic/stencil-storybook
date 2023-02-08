import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-comp',
  styleUrl: 'button.css'
})

export class BtnComp {
  // Indicate that name should be a public property on the Component
  @Prop() active: boolean;
  @Prop() name: string;

  render() {
    return <button class='btn-class'>{this.name}</button>;
  }
}
