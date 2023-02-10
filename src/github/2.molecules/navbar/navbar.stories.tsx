import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Navbar',
  component: 'gh-navbar',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <div>
      <gh-navbar items={['First', 'Second', 'Third', 'First', 'Second', 'Third', 'First', 'Second', 'Third']}></gh-navbar>
    </div>
    <div>
      <gh-navbar items={['First', 'Second', 'Third', 'First', 'Second', 'Third', 'First', 'Second', 'Third']} class={'inverted'}></gh-navbar>
    </div>
  </div>
);
