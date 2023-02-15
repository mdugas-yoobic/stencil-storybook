import { h } from '@stencil/core';

export default {
  title: 'GH/Templates/Main Header',
  component: 'gh-main-header',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <gh-main-header
    repoData={{ folder: 'folder', name: 'name' }}
    forked={{ folder: 'forked', name: 'nameforked' }}
    tabbarItems={['Item', 'Item', 'Item', 'Item', 'Item', 'Item']}
  ></gh-main-header>
);
