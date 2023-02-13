import { Component, h, Prop } from '@stencil/core';

import { TLanguage } from '../../1.atoms/languageBar/language-bar';

@Component({
  tag: 'gh-language-section',
  styleUrl: 'language-section.css',
  shadow: true
})
export class GhLanguageSection {
  @Prop() languages: TLanguage[];

  render() {
    return (
      <div>
        <h3>Languages</h3>
        <gh-language-bar languagesList={this.languages}></gh-language-bar>
        <p>
          {this.languages.map((lang) => (
            <gh-language-desc language={lang}></gh-language-desc>
          ))}
        </p>
      </div>
    );
  }
}
