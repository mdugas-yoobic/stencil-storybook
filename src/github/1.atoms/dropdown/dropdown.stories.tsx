import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Dropdown',
  component: 'gh-dropdown',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-dropdown class="align-left" size={'small'}></gh-dropdown>
    <gh-dropdown class="align-right" size={'large'}></gh-dropdown>
  </div>
);
