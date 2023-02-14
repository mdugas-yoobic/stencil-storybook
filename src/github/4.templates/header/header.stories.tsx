import { h } from '@stencil/core';

export default {
  title: 'GH/Templates/Header',
  component: 'gh-header',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <gh-header items={['Item', 'Item', 'Item', 'Item', 'Item', 'Item']} placeholder={'Search'}></gh-header>;
