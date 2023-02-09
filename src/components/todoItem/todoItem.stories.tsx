import { h } from '@stencil/core';
import React from 'react';

export default {
  title: 'Todo Item',
  component: 'item-list',
  parameters: {
    viewmode: 'story'
  }
};

export const Item = () => {
  return (
    <div>
      <todo-item description="test" uuid={1}></todo-item>
      <todo-item description="deuxieme" uuid={2}></todo-item>
    </div>
  );
};
