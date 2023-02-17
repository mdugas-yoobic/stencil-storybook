import { Component, h, Host } from '@stencil/core';

import { TFileType } from '../../2.molecules/file-line/file-line';

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
  // tabbarItems = ['<> Code', 'H Pull requests', 'O Actions', '[] Projects', '[] Wiki', '{} Security', '|/_ Insights', 'o Settings'];
  tabbarItems = [
    { name: 'Code', icon: 'fas fa-code medium', iconColor: '#596069' },
    { name: 'Pull requests', icon: 'fas fa-code-branch medium', iconColor: '#596069' },
    { name: 'Actions', icon: 'far fa-play-circle medium', iconColor: '#596069' },
    { name: 'Projects', icon: 'far fa-square medium', iconColor: '#596069' },
    { name: 'Wiki', icon: 'fas fa-book-open medium', iconColor: '#596069' },
    { name: 'Security', icon: 'fas fa-shield-alt medium', iconColor: '#596069' },
    { name: 'Insights', icon: 'fas fa-chart-line medium', iconColor: '#596069' },
    { name: 'Settings', icon: 'fas fa-cog medium', iconColor: '#596069' }
  ];

  fileList = [
    { filename: '.husky', commitComment: 'feat: todo done', dateField: 'last week', filetype: 'folder' as TFileType },
    { filename: '.idea', commitComment: 'feat(config): do not use SCSS file watcher in JetBrains IDEs', dateField: '7 months ago', filetype: 'folder' as TFileType },
    { filename: '.storybook', commitComment: 'feat(storybook): allow using JSX stories', dateField: '7 months ago', filetype: 'folder' as TFileType },
    { filename: 'src', commitComment: 'feat: repo page', dateField: '22 minutes ago', filetype: 'folder' as TFileType },
    { filename: '.commitlintrc', commitComment: 'feat(config): add storybook scope', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.editorconfig', commitComment: 'feat(config): set editor configuration', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.eslintignore', commitComment: 'fix(config): analyze relevant code only', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.eslintrc', commitComment: 'feat(config): sort code imports/exports', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.gitignore', commitComment: 'feat: navitem and start navbar', dateField: 'last week', filetype: 'file' as TFileType },
    { filename: '.lintstagedrc', commitComment: 'feat(config): lint staged Git stylesheets', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.prettierignore', commitComment: 'feat(stencil): ignore generated file from code formatter', dateField: '6 months ago', filetype: 'file' as TFileType },
    { filename: '.prettierrc', commitComment: 'feat(config): sort code imports/exports', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.stylelintignore', commitComment: 'fix(config): analyze relevant stylesheets only', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: '.stylelintrc', commitComment: 'fix(config): analyze relevant stylesheets only', dateField: '7 months ago', filetype: 'file' as TFileType },
    { filename: 'package-lock.json', commitComment: 'feat(stencil): upgrade dependency', dateField: '6 months ago', filetype: 'file' as TFileType },
    { filename: 'package.json', commitComment: 'feat: todo done', dateField: 'last week', filetype: 'file' as TFileType },
    { filename: 'stencil.config.json', commitComment: 'feat: todo done', dateField: 'last week', filetype: 'file' as TFileType },
    { filename: 'tsconfig.json', commitComment: 'feat(stencil): allow importing JSON files', dateField: '6 months ago', filetype: 'file' as TFileType }
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
