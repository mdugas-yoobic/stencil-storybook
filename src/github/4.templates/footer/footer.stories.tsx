import { h } from '@stencil/core';

export default {
  title: 'GH/Templates/Footer',
  component: 'gh-footer',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <gh-footer items={['Item', 'Item', 'Item', 'Item', 'Item', 'Item']}></gh-footer>;
