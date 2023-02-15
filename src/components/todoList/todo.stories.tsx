import { h } from '@stencil/core';

export default {
  title: 'Old/Todo List',
  component: 'item-list',
  parameters: {
    viewmode: 'story'
  }
};

export const List = () => {
  return (
    <div>
      <item-list delay={1000}></item-list>
      <item-list delay={2000}></item-list>
    </div>
  );
};
