import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'gh-section-list',
  styleUrl: 'section-list.css',
  shadow: true
})
export class GhSectionList {
  @Prop() sectionNumber: number;

  render() {
    const slots = [];
    for (let index = 0; index < this.sectionNumber; index++) {
      if (index !== 0) {
        slots.push(<hr />);
      }
      slots.push(<slot name={index.toString()} />);
    }
    return <Host>{slots}</Host>;
  }
}
