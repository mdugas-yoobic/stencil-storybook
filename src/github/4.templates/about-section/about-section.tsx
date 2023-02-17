import { Component, h, Prop } from '@stencil/core';

export type TLanguage = {
  language: string;
  color: string;
  pourcentage: number;
};

@Component({
  tag: 'gh-about-section',
  styleUrl: 'about-section.css',
  shadow: true
})
export class GhAboutSection {
  @Prop() languages: TLanguage[];

  render() {
    return (
      <gh-section-list class={'aside'} sectionNumber={4}>
        <gh-section-element slot={'0'}>
          <h3 slot={'title'}>About</h3>,
          <p slot={'main'}>
            No description, website, or topic provided.
            <gh-a class={'align-left'}>
              <gh-icon type={'far fa-star'} color={'#596069'}></gh-icon>0 stars
            </gh-a>
            <gh-a class={'align-left'}>
              <gh-icon type={'far fa-eye'} color={'#596069'}></gh-icon>0 watching
            </gh-a>
            <gh-a class={'align-left'}>
              <gh-icon type={'fas fa-code-branch medium'} color={'#596069'}></gh-icon> 2 forks
            </gh-a>
          </p>
        </gh-section-element>
        <gh-section-element slot={'2'}>
          <h3 slot={'title'}>Packages</h3>
          <p slot={'main'}>
            No packages published<gh-a class={'align-left underline blue'}>Publish your first package</gh-a>
          </p>
        </gh-section-element>
        <gh-section-element slot={'1'}>
          <h3 slot={'title'}>Releases</h3>
          <p slot={'main'}>
            No release published<gh-a class={'align-left underline blue'}>Create new release</gh-a>
          </p>
        </gh-section-element>
        <gh-section-element slot={'3'}>
          <h3 slot={'title'}>Languages</h3>
          <p slot={'main'}>
            <gh-pourcentage-bar pourcentages={this.languages.map((lang) => lang.pourcentage)} colors={this.languages.map((lang) => lang.color)}></gh-pourcentage-bar>
            <p class={'tag-list'}>
              {this.languages.map((lang) => (
                <gh-icon-tag iconColor={lang.color}>
                  <strong>{lang.language}</strong>&nbsp;{lang.pourcentage}%
                </gh-icon-tag>
              ))}
            </p>
          </p>
        </gh-section-element>
      </gh-section-list>
    );
  }
}
