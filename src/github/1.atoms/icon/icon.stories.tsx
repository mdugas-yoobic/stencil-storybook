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
    <gh-icon type={'fas fa-folder'} color={'red'}></gh-icon>
    <gh-icon type={'fas fa-folder small'} color={'blue'}></gh-icon>
    <gh-icon type={'fas fa-folder medium'} color={'blue'}></gh-icon>
    <gh-icon type={'fas fa-folder large'} color={'blue'}></gh-icon>
  </div>
);
