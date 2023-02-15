import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Button',
  component: 'gh-button',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-button>Normal</gh-button>
    <gh-button class={'green'}>Green</gh-button>
  </div>
);
