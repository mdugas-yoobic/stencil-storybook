import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Tab Item',
  component: 'gh-tab-item',
  parameters: {
    viewmode: 'story'
  }
};

const tabItems = [
  { name: 'Selected' },
  { name: 'Not Selected', icon: 'fas fa-star small' },
  { name: 'Not Selected', icon: 'fas fa-code-branch medium', iconColor: 'cyan' },
  { name: 'Not Selected', icon: 'far fa-file large', iconColor: 'green' }
];
export const Basic = () => (
  <div>
    <gh-tab-item class={'selected'} tabItem={tabItems[0]}></gh-tab-item>
    <gh-tab-item tabItem={tabItems[1]}></gh-tab-item>
    <gh-tab-item tabItem={tabItems[2]}></gh-tab-item>
    <gh-tab-item tabItem={tabItems[3]}></gh-tab-item>
  </div>
);
