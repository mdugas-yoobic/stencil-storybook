import { Component, h, Host } from '@stencil/core';

import { TIcons } from '../../1.atoms/icon/icon';
// import { TRepoData } from '../../2.molecules/breadcrumb/breadcrumb';

@Component({
  tag: 'gh-repo-page',
  styleUrl: 'repo-page.css',
  shadow: true
})
export class GhMainHeader {
  placeholder = 'Search or jump to...';
  navbarItems = ['Pulls', 'Issues', 'Codespaces', 'Marketplace', 'Explore'];

  repoData = { folder: 'folder', name: 'name' };
  forked = { folder: 'forked', name: 'nameforked' };
  tabbarItems = ['<> Code', 'H Pull requests', 'O Actions', '[] Projects', '[] Wiki', '{} Security', '|/_ Insights', 'o Settings'];

  fileData = {
    filename: 'file.txt',
    commitComment: 'feat: Very very long commit message that should get ellipsed or the layout will break',
    dateField: '1 day ago',
    icon: 'file' as TIcons
  };
  folderData = { filename: 'folder', commitComment: 'Initial commit', dateField: '1 day ago', icon: 'folder' as TIcons };
  fileList = [this.folderData, this.folderData, this.fileData, this.fileData];

  mainRepoData = {
    username: 'username',
    lastCommit: 'lastCommit',
    lastHash: 'lastHash',
    lastDate: 'lastDate',
    numberOfCommits: 10,
    fileList: this.fileList
  };

  languages = [
    { language: 'TypeScript', color: '#f22', pourcentage: 40 },
    { language: 'HTML', color: '#fa2', pourcentage: 29 },
    { language: 'CSS', color: '#523e78', pourcentage: 30 },
    { language: 'Bash', color: '#9de', pourcentage: 1 }
  ];
  footerItems = ['Terms', 'Privacy', 'Security', 'Status', 'Docs', 'Contact GitHub', 'Pricing', 'API', 'Training', 'Blog', 'About'];

  render() {
    return (
      <Host>
        <gh-header items={this.navbarItems} placeholder={this.placeholder}></gh-header>
        <gh-main-header repoData={this.repoData} forked={this.forked} tabbarItems={this.tabbarItems}></gh-main-header>
        <main>
          <gh-main-section repoData={this.mainRepoData} class={'grid1'}></gh-main-section>
          <gh-about-section languages={this.languages} class={'grid2'}></gh-about-section>
        </main>
        <gh-footer items={this.footerItems} class={'footer'}></gh-footer>
      </Host>
    );
  }
}
