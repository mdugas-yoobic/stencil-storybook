import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Nav Item',
  component: 'gh-nav-item',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-nav-item>Normal</gh-nav-item>
    <gh-nav-item class={'inverted'}>Inverted</gh-nav-item>
  </div>
);
