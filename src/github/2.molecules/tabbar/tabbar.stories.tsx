import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Tabbar',
  component: 'gh-tabbar',
  parameters: {
    viewmode: 'story'
  }
};

const tabItems = [
  { name: 'Code', icon: 'fas fa-code medium', iconColor: '#596069' },
  { name: 'Pull requests', icon: 'fas fa-code-branch medium', iconColor: '#596069' },
  { name: 'Actions', icon: 'far fa-play-circle medium', iconColor: '#596069' },
  { name: 'Projects', icon: 'far fa-square medium', iconColor: '#596069' },
  { name: 'Wiki', icon: 'fas fa-book-open medium', iconColor: '#596069' },
  { name: 'Security', icon: 'fas fa-shield-alt medium', iconColor: '#596069' },
  { name: 'Insights', icon: 'fas fa-chart-line medium', iconColor: '#596069' },
  { name: 'Settings', icon: 'fas fa-cog medium', iconColor: '#596069' }
];
export const Basic = () => <gh-tabbar tabItems={tabItems}></gh-tabbar>;
