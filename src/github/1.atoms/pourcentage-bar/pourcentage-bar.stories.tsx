import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Pourcentage Bar',
  component: 'gh-pourcentage-bar',
  parameters: {
    viewmode: 'story'
  }
};
const pourcentages = [40, 20, 30, 10];
const colors = ['#ee0', '#0ee', '#e0e', '#0e0'];
export const Basic = () => <gh-pourcentage-bar pourcentages={pourcentages} colors={colors}></gh-pourcentage-bar>;
