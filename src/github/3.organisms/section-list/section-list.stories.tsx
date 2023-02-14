import { h } from '@stencil/core';

export default {
  title: 'GH/Organisms/Section List',
  component: 'gh-section-element',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <gh-section-list sectionNumber={3}>
    <gh-section-element slot={'0'}>
      <h3 slot={'title'}>Packages</h3>
      <p slot={'main'}>
        No packages published<gh-a class={'align-left underline blue'}>Publish your first package</gh-a>
      </p>
    </gh-section-element>
    <h1 slot={'1'}>Other</h1>
    <h1 slot={'2'}>Last</h1>
  </gh-section-list>
);
