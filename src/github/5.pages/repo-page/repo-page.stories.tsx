import { h } from '@stencil/core';

export default {
  title: 'GH/Pages/Repo Page',
  component: 'gh-repo-page',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => <gh-repo-page></gh-repo-page>;
