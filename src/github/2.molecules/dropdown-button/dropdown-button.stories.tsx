import { h } from '@stencil/core';

export default {
  title: 'GH Dropdown button',
  component: 'gh-dropdown-button',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <div>
      <gh-dropdown-button dropdown-size={'small'} button-name={'Dropdwn'}></gh-dropdown-button>
    </div>
    <span>This is template text</span>
  </div>
);
