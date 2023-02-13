import { h } from '@stencil/core';

export default {
  title: 'GH/Organisms/Release Section',
  component: 'gh-release-section',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <gh-release-section></gh-release-section>;
