import { Component, h, Prop } from '@stencil/core';

export type TFileType = 'folder' | 'file';

export type FileData = {
  filename: string;
  commitComment: string;
  dateField: string;
  filetype: TFileType;
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
    let icon = null;
    if (this.fileData.filetype === 'folder') {
      icon = <gh-icon type={'fas fa-folder'} color={'#6bacf8'}></gh-icon>;
    } else {
      icon = <gh-icon type={'far fa-file'} color={'#596069'}></gh-icon>;
    }
    return (
      <li key={this.fileData.filename} class={this.getClass()}>
        <div class="iconslot">{icon}</div>
        <gh-a class={'underline align-left filename'}>{this.fileData.filename}</gh-a>
        <gh-a class={'underline align-left commit'}>{this.fileData.commitComment}</gh-a>
        <div class={'date'}>{this.fileData.dateField}</div>
      </li>
    );
  }
}
