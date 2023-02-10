import { h } from '@stencil/core';

export default {
  title: 'GH Dropdown Modal',
  component: 'gh-dropdown-modal',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-dropdown-modal size={'small'}></gh-dropdown-modal>
    <gh-dropdown-modal size={'large'}></gh-dropdown-modal>
  </div>
);
