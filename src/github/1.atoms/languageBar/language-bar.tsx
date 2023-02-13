import { Component, h, Host, Prop } from '@stencil/core';

export type TLanguage = {
  language: string;
  color: string;
  pourcent: number;
};

@Component({
  tag: 'gh-language-bar',
  styleUrl: 'language-bar.css',
  shadow: true
})
export class GhLanguageBar {
  @Prop() languagesList: TLanguage[];

  render() {
    return (
      <Host>
        {this.languagesList.map((language) => (
          <span style={{ width: language.pourcent + '%', background: language.color }}></span>
        ))}
      </Host>
    );
  }
}
