import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Icon Tag',
  component: 'gh-icon-tag',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <gh-icon-tag iconColor={'red'}>
    <strong>Text</strong>&nbsp;10%
  </gh-icon-tag>
);
