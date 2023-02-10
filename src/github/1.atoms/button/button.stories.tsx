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
  </div>
);
