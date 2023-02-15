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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <gh-dropdown-button dropdownSize={'large'} buttonName={'Dropdwn left'} dropdownAlign={'align-left'}></gh-dropdown-button>
      <gh-dropdown-button dropdownSize={'small'} buttonName={'Dropdwn right'} dropdownAlign={'align-right'}></gh-dropdown-button>
    </div>
    <span>This is template text</span>
  </div>
);
