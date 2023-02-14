import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Dropdown Modal',
  component: 'gh-dropdown-modal',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-dropdown-modal class="align-left" size={'small'}></gh-dropdown-modal>
    <gh-dropdown-modal class="align-right" size={'large'}></gh-dropdown-modal>
  </div>
);
