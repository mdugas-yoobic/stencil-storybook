import { h } from '@stencil/core';

export default {
  title: 'Navbar',
  component: 'x-navbar',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <x-navbar></x-navbar>;
