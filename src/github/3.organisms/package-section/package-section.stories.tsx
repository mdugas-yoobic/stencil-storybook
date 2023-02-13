import { h } from '@stencil/core';

export default {
  title: 'GH/Organisms/Package Section',
  component: 'gh-package-section',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <gh-package-section></gh-package-section>;
