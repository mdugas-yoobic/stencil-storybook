import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Breadcrumb',
  component: 'gh-breadcrumb',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <gh-breadcrumb repo={{ folder: 'folder', name: 'name' }} forked={{ folder: 'forked', name: 'nameforked' }}></gh-breadcrumb>;
