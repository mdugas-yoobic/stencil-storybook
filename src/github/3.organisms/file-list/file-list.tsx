import { Component, h, Prop } from '@stencil/core';

import { FileData } from '../../2.molecules/file-line/file-line';

export type repoData = {
  username: string;
  lastCommit: string;
  lastHash: string;
  lastDate: string;
  numberOfCommits: number;
  fileList: FileData[];
};

@Component({
  tag: 'gh-file-list',
  styleUrl: 'file-list.css',
  shadow: true
})
export class GhFileList {
  @Prop() repoData!: repoData;

  fileList = this.repoData.fileList;

  render() {
    const last = this.fileList.length - 1;
    return (
      <ul>
        <li>
          <div class={'left'}>
            <gh-icon type={'user'}> </gh-icon>
            <gh-a class={'underline'}>{this.repoData.username}</gh-a>
            <gh-a class={'underline'}>{this.repoData.lastCommit}</gh-a>
          </div>
          <div class={'right'}>
            <gh-a class={'underline'}>{this.repoData.lastHash}</gh-a>
            <gh-a class={'underline'}>{this.repoData.lastDate}</gh-a>
            <gh-a class={'underline'}>
              <span>{this.repoData.numberOfCommits} commits</span>
            </gh-a>
          </div>
        </li>
        {this.fileList.map((fileData, idx) => (
          <gh-file-line hover={true} rounded={last == idx} fileData={fileData}></gh-file-line>
        ))}
      </ul>
    );
  }
}
