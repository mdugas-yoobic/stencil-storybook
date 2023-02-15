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

  repoData = { folder: 'mdugas-yoobic', name: 'stencil-storybook' };
  forked = { folder: 'darondel-yoobic', name: 'stencil-storybook' };
  tabbarItems = ['<> Code', 'H Pull requests', 'O Actions', '[] Projects', '[] Wiki', '{} Security', '|/_ Insights', 'o Settings'];

  fileData = {
    filename: 'file.txt',
    commitComment: 'feat: Very very long commit message that should get ellipsed or the layout will break',
    dateField: '1 day ago',
    icon: 'file' as TIcons
  };
  fileList = [
    { filename: '.husky', commitComment: 'feat: todo done', dateField: 'last week', icon: 'folder' as TIcons },
    { filename: '.idea', commitComment: 'feat(config): do not use SCSS file watcher in JetBrains IDEs', dateField: '7 months ago', icon: 'folder' as TIcons },
    { filename: '.storybook', commitComment: 'feat(storybook): allow using JSX stories', dateField: '7 months ago', icon: 'folder' as TIcons },
    { filename: 'src', commitComment: 'feat: repo page', dateField: '22 minutes ago', icon: 'folder' as TIcons },
    { filename: '.commitlintrc', commitComment: 'feat(config): add storybook scope', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.editorconfig', commitComment: 'feat(config): set editor configuration', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.eslintignore', commitComment: 'fix(config): analyze relevant code only', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.eslintrc', commitComment: 'feat(config): sort code imports/exports', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.gitignore', commitComment: 'feat: navitem and start navbar', dateField: 'last week', icon: 'file' as TIcons },
    { filename: '.lintstagedrc', commitComment: 'feat(config): lint staged Git stylesheets', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.prettierignore', commitComment: 'feat(stencil): ignore generated file from code formatter', dateField: '6 months ago', icon: 'file' as TIcons },
    { filename: '.prettierrc', commitComment: 'feat(config): sort code imports/exports', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.stylelintignore', commitComment: 'fix(config): analyze relevant stylesheets only', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: '.stylelintrc', commitComment: 'fix(config): analyze relevant stylesheets only', dateField: '7 months ago', icon: 'file' as TIcons },
    { filename: 'package-lock.json', commitComment: 'feat(stencil): upgrade dependency', dateField: '6 months ago', icon: 'file' as TIcons },
    { filename: 'package.json', commitComment: 'feat: todo done', dateField: 'last week', icon: 'file' as TIcons },
    { filename: 'stencil.config.json', commitComment: 'feat: todo done', dateField: 'last week', icon: 'file' as TIcons },
    { filename: 'tsconfig.json', commitComment: 'feat(stencil): allow importing JSON files', dateField: '6 months ago', icon: 'file' as TIcons }
  ];

  mainRepoData = {
    username: 'mdugas-yoobic',
    lastCommit: 'feat: repo page',
    lastHash: '2c9e2b3',
    lastDate: '11 minutes ago',
    numberOfCommits: 60,
    fileList: this.fileList
  };

  languages = [
    { language: 'TypeScript', color: '#4476c0', pourcentage: 70 },
    { language: 'CSS', color: '#523e78', pourcentage: 13 },
    { language: 'JavaScript', color: '#eee170', pourcentage: 8 },
    { language: 'HTML', color: '#d25753', pourcentage: 7 },
    { language: 'Shell', color: '#9dde66', pourcentage: 2 }
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
