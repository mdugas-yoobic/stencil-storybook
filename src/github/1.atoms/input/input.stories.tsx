import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Input',
  component: 'gh-input',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-input placeholder={'Placeholder'}></gh-input>
  </div>
);
