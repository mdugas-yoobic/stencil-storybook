import { h } from '@stencil/core';

export default {
  title: 'GH/Templates/Main Section',
  component: 'gh-main-section',
  parameters: {
    viewmode: 'story'
  }
};

const fileData = {
  filename: 'file.txt',
  commitComment: 'feat: Very very long commit message that should get ellipsed or the layout will break',
  dateField: '1 day ago',
  filetype: 'file'
};
const folderData = { filename: 'folder', commitComment: 'Initial commit', dateField: '1 day ago', filetype: 'folder' };

const fileList = [folderData, folderData, fileData, fileData];

const repoData = {
  username: 'username',
  lastCommit: 'lastCommit',
  lastHash: 'lastHash',
  lastDate: 'lastDate',
  numberOfCommits: 10,
  fileList: fileList
};

export const Basic = () => <gh-main-section repoData={repoData}></gh-main-section>;
