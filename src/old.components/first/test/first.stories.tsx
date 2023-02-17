import { h } from '@stencil/core';

export default {
  title: 'Old/First',
  component: 'first-comp',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <first-comp name="basic"></first-comp>;
