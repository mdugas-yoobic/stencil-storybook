import { Component, h, Host, Prop } from '@stencil/core';

export type TRepoData = {
  folder: string;
  name: string;
};

@Component({
  tag: 'gh-breadcrumb',
  styleUrl: 'breadcrumb.css',
  shadow: true
})
export class GhBreadcrumb {
  @Prop() repo: TRepoData;
  @Prop() forked: TRepoData;
  @Prop() isPublic = true;

  render() {
    let forked = null;
    if (this.forked) {
      forked = (
        <p>
          forked from<gh-a class={'blue underline'}>{this.forked.folder + '/' + this.forked.name}</gh-a>
        </p>
      );
    }
    return (
      <Host>
        <h2 class={this.isPublic ? 'public' : ''}>
          <gh-icon type={'fas fa-code-branch medium'} color={'#596069'}></gh-icon>
          <gh-a class={'blue underline'}>{this.repo.folder}</gh-a>/<gh-a class={'blue underline'}>{this.repo.name}</gh-a>
        </h2>
        {forked}
      </Host>
    );
  }
}
