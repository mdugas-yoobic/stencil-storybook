import { h } from '@stencil/core';

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
<todo-item></todo-item>
<todo-item></todo-item>
</div>);
}
