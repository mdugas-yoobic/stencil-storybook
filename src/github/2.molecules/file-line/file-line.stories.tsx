import { h } from '@stencil/core';

import { FileData } from './file-line';

export default {
  title: 'GH File Line',
  component: 'gh-file-line',
  parameters: {
    viewmode: 'story'
  }
};

const fileData = { filename: 'file.txt', commitComment: 'Initial commit', dateField: '1 day ago', icon: 'file' } as FileData;
const folderData = { filename: 'folder', commitComment: 'Initial commit', dateField: '1 day ago', icon: 'folder' };
export const Basic = () => (
  <ul>
    <gh-file-line hover={true} fileData={folderData}></gh-file-line>
    <gh-file-line fileData={fileData} rounded={true}></gh-file-line>
  </ul>
);
