import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Tab Item',
  component: 'gh-tab-item',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-tab-item class={'selected'}>Selected</gh-tab-item>
    <gh-tab-item>Not selected</gh-tab-item>
    <gh-tab-item>Not selected 2</gh-tab-item>
  </div>
);
