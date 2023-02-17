import { h } from '@stencil/core';

export default {
  title: 'Old/Button',
  component: 'button-comp',
  parameters: {
    viewmode: 'story'
  }
};

export const BtnBasic = () => (
  <div>
    <x-button color="red">Name</x-button>
    <x-button enable={false}>Name</x-button>
  </div>
);
