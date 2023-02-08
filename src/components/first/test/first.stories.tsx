import { h } from '@stencil/core';

export default {
  title: 'First',
  component: 'first-comp',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <first-comp name='basic'></first-comp>
