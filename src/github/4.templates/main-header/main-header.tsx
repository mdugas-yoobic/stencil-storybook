import { Component, h, Host, Prop } from '@stencil/core';

import { TTabItemData } from '../../1.atoms/tab-item/tabItem';
import { TRepoData } from '../../2.molecules/breadcrumb/breadcrumb';

@Component({
  tag: 'gh-main-header',
  styleUrl: 'main-header.css',
  shadow: true
})
export class GhMainHeader {
  @Prop() repoData: TRepoData;
  @Prop() forked: TRepoData;
  @Prop() tabbarItems: TTabItemData[];

  render() {
    return (
      <Host>
        <div class={'top'}>
          <gh-breadcrumb repo={this.repoData} forked={this.forked}></gh-breadcrumb>
          <div>
            <gh-button>
              <gh-icon type={'fas fa-thumbtack'} color={'#596069'}></gh-icon>Pin
            </gh-button>
            <gh-dropdown-button dropdownAlign={'align-right'} buttonName={'Watch ↓'} dropdownSize={'large'}></gh-dropdown-button>
            <gh-dropdown-button dropdownAlign={'align-right'} buttonName={'Fork ↓'} dropdownSize={'small'}></gh-dropdown-button>
            <gh-dropdown-button dropdownAlign={'align-right'} buttonName={'Star ↓'} dropdownSize={'small'}></gh-dropdown-button>
          </div>
        </div>
        <gh-tabbar tabItems={this.tabbarItems} class={'bottom'}></gh-tabbar>
      </Host>
    );
  }
}
