import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Section Element',
  component: 'gh-section-element',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <gh-section-element>
    <h3 slot={'title'}>Title</h3>
    <main slot={'main'}>
      <p>Content</p>
      <gh-a class={'align-left'}>Link</gh-a>
    </main>
  </gh-section-element>
);
