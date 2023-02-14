import { Component, h, Prop } from '@stencil/core';

import { TLanguage } from '../../1.atoms/languageBar/language-bar';

@Component({
  tag: 'gh-about-section',
  styleUrl: 'about-section.css',
  shadow: true
})
export class GhAboutSection {
  @Prop() languages: TLanguage[];

  render() {
    return (
      <gh-section-list sectionNumber={4}>
        <gh-section-element slot={'0'}>
          <h3 slot={'title'}>About</h3>,
          <p slot={'main'}>
            No description, website, or topic provided.
            <gh-a class={'align-left'}>
              <gh-icon type="small-circle" color={'#596069'}></gh-icon>0 stars
            </gh-a>
            <gh-a class={'align-left'}>
              <gh-icon type="small-circle" color={'#596069'}></gh-icon>0 watching
            </gh-a>
            <gh-a class={'align-left'}>
              <gh-icon type="small-circle" color={'#596069'}></gh-icon>2 forks
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
            <gh-language-bar languages={this.languages}></gh-language-bar>
            <p class={'tag-list'}>
              {this.languages.map((lang) => (
                <gh-icon-tag iconColor={lang.color}>
                  <strong>{lang.language}</strong>&nbsp;{lang.pourcent}%
                </gh-icon-tag>
              ))}
            </p>
          </p>
        </gh-section-element>
      </gh-section-list>
    );
  }
}
