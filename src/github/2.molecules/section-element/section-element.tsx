import { Component, h } from '@stencil/core';

@Component({
  tag: 'gh-section-element',
  // styleUrl: 'section-element.css',
  shadow: true
})
export class GhSectionElement {
  render() {
    return (
      <section>
        <slot name={'title'} />
        <slot name={'main'} />
      </section>
    );
  }
}
