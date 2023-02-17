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
            <gh-dropdown-button dropdownSize={'small'} buttonName={'master ↓'} dropdownAlign={'align-left'}>
              Switch branch
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
            <gh-dropdown-button dropdownSize={'small'} buttonName={'Add file ↓'} dropdownAlign={'align-right'}>
              Switch branch
            </gh-dropdown-button>
            <gh-dropdown-button dropdownSize={'large'} buttonClass={'green'} buttonName={'<> Code ↓'} dropdownAlign={'align-right'}>
              Switch branch
            </gh-dropdown-button>
          </div>
        </header>
        <gh-file-list repoData={this.repoData}></gh-file-list>
      </Host>
    );
  }
}
