import { h } from '@stencil/core';

export default {
  title: 'GH/Templates/About Section',
  component: 'gh-about-section',
  parameters: {
    viewmode: 'story'
  }
};

const languages = [
  { language: 'TypeScript', color: '#f22', pourcentage: '40' },
  { language: 'HTML', color: '#fa2', pourcentage: '29' },
  { language: 'PHP', color: '#0a2', pourcentage: '30' },
  { language: 'Bash', color: '#9de', pourcentage: '1' }
];
export const Basic = () => <gh-about-section languages={languages}></gh-about-section>;
