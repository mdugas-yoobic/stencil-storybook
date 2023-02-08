import { h } from '@stencil/core';

export default {
  title: 'Todo Section',
  component: 'todo-section',
  parameters: {
    viewmode: 'story'
  }
};

export const List = () => <todo-section ></todo-section>;

