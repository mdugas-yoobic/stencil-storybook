import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Icon',
  component: 'gh-icon',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-icon type={'folder'}></gh-icon>
    <gh-icon type={'file'}></gh-icon>
    <gh-icon type={'small-circle'} color={'#0ee'}></gh-icon>
    <gh-icon type={'user'}></gh-icon>
  </div>
);
