import { h } from '@stencil/core';

export default {
  title: 'Button',
  component: 'button-comp',
  parameters: {
    viewmode: 'story'
  }
};

export const BtnBasic = () => <button-comp name='basic' color='red'></button-comp>
