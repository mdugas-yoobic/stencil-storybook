import { Component, h, Host, Prop } from '@stencil/core';

import { repoData } from '../../3.organisms/file-list/file-list';

@Component({
  tag: 'gh-main-section',
  styleUrl: 'main-section.css',
  shadow: true
})
export class GhMainSection {
  @Prop() items: string[];
  @Prop() repoData: repoData;

  render() {
    return (
      <Host>
        <header>
          <div class={'left'}>
            <gh-dropdown-button dropdownSize={'small'} dropdownAlign={'align-left'}>
              <span slot={'button'}>
                <gh-icon type={'fas fa-code-branch medium'} color={'#596069'}></gh-icon>
                master
                <gh-icon type={'fas fa-caret-down medium'} color={'#596069'}></gh-icon>
              </span>
            </gh-dropdown-button>
            <gh-a>
              {' '}
              <gh-icon type={'fas fa-code-branch medium'} color={'#596069'}></gh-icon> 1 branch
            </gh-a>
            <gh-a>
              {' '}
              <gh-icon type={'fas fa-tag medium'} color={'#596069'}></gh-icon> 0 tag
            </gh-a>
          </div>
          <div class={'right'}>
            <gh-a class={'button'}>Go to file</gh-a>
            <gh-dropdown-button dropdownSize={'small'} dropdownAlign={'align-right'}>
              <span slot={'button'}>
                Add file
                <gh-icon type={'fas fa-caret-down medium'} color={'#596069'}></gh-icon>
              </span>
            </gh-dropdown-button>
            <gh-dropdown-button dropdownSize={'large'} buttonClass={'green'} dropdownAlign={'align-right'}>
              <span slot={'button'}>
                <gh-icon type={'fas fa-code medium'} color={'white'}></gh-icon>
                Code
                <gh-icon type={'fas fa-caret-down medium'} color={'white'}></gh-icon>
              </span>
            </gh-dropdown-button>
          </div>
        </header>
        <gh-file-list repoData={this.repoData}></gh-file-list>
      </Host>
    );
  }
}
