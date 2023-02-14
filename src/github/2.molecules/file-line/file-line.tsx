import { Component, h, Prop } from '@stencil/core';

import { TIcons } from '../../1.atoms/icon/icon';

export type FileData = {
  filename: string;
  commitComment: string;
  dateField: string;
  icon: TIcons;
};

@Component({
  tag: 'gh-file-line',
  styleUrl: 'file-line.css',
  shadow: true
})
export class GhFileLine {
  @Prop() fileData!: FileData;
  @Prop() hover = false;
  @Prop() rounded = false;

  getClass() {
    let htmlClass = '';
    htmlClass += this.hover ? 'hover ' : '';
    htmlClass += this.rounded ? 'rounded ' : '';
    return htmlClass;
  }

  render() {
    return (
      <li key={this.fileData.filename} class={this.getClass()}>
        <div class="iconslot">
          <gh-icon type={this.fileData.icon}></gh-icon>
        </div>
        <gh-a class={'underline align-left filename'}>{this.fileData.filename}</gh-a>
        <gh-a class={'underline align-left commit'}>{this.fileData.commitComment}</gh-a>
        <div class={'date'}>{this.fileData.dateField}</div>
      </li>
    );
  }
}
