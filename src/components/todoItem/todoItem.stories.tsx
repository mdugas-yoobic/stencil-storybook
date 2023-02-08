import { h } from '@stencil/core';
import React from "react";

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
<todo-item description="test"></todo-item>
<todo-item description="deuxieme"></todo-item>
</div>);
}
