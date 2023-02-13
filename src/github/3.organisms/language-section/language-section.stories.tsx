import { h } from '@stencil/core';

export default {
  title: 'GH/Organisms/Language Section',
  component: 'gh-language-desc',
  parameters: {
    viewmode: 'story'
  }
};

const languages = [
  { language: 'TypeScript', color: '#f22', pourcent: '40' },
  { language: 'HTML', color: '#fa2', pourcent: '29' },
  { language: 'PHP', color: '#0a2', pourcent: '30' },
  { language: 'Bash', color: '#9de', pourcent: '1' }
];
export const Basic = () => <gh-language-section languages={languages}></gh-language-section>;
