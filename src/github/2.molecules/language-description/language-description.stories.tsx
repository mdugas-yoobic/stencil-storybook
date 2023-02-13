import { h } from '@stencil/core';

export default {
  title: 'GH/Molecules/Language Description',
  component: 'gh-language-desc',
  parameters: {
    viewmode: 'story'
  }
};

const TS = { language: 'TypeScript', color: '#f22', pourcent: '40' };
export const Basic = () => <gh-language-desc language={TS}></gh-language-desc>;
