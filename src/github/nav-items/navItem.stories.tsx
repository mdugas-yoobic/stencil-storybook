import { h } from '@stencil/core';

export default {
  title: 'Nav Items',
  component: 'x-nav-item',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <x-nav-item>Normal</x-nav-item>
    <x-nav-item class={'inverted'}>Inverted</x-nav-item>
  </div>
);
