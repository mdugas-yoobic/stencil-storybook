import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Dropdown button',
  component: 'gh-dropdown-button',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
      <gh-dropdown-button dropdown-size={'small'} button-name={'Dropdwn'} dropdownAlign={'align-left'}></gh-dropdown-button>
      <gh-dropdown-button dropdown-size={'small'} button-name={'Dropdwn'} dropdownAlign={'align-right'}></gh-dropdown-button>
    </div>
    <span>This is template text</span>
  </div>
);
