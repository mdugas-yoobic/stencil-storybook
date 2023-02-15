import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Tabbar',
  component: 'gh-tabbar',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <div>
      <gh-tabbar items={['First', 'Second', 'Third', 'First', 'Second', 'Third', 'First', 'Second', 'Third']}></gh-tabbar>
    </div>
    <div>
      <gh-tabbar items={['First', 'Second', 'Third', 'First', 'Second', 'Third', 'First', 'Second', 'Third']} class={'inverted'}></gh-tabbar>
    </div>
  </div>
);
