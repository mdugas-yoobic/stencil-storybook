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
      <gh-dropdown-button dropdownSize={'large'} dropdownAlign={'align-left'}>
        <span slot={'button'}>
          <gh-icon type={'fas fa-star'}></gh-icon>Dropdown left
        </span>
      </gh-dropdown-button>
      <gh-dropdown-button dropdownSize={'small'} dropdownAlign={'align-right'}>
        <span slot={'button'}>Dropdown right</span>
      </gh-dropdown-button>
    </div>
    <span>This is template text</span>
  </div>
);
