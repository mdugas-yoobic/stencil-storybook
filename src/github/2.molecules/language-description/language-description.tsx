import { Component, h, Prop } from '@stencil/core';

import { TLanguage } from '../../1.atoms/languageBar/language-bar';

@Component({
  tag: 'gh-language-desc',
  styleUrl: 'language-description.css',
  shadow: true
})
export class GhLanguageDesc {
  @Prop() language: TLanguage;

  render() {
    return [<gh-icon type="small-circle" color={this.language.color}></gh-icon>, <span class="language">{this.language.language}</span>, <span>{this.language.pourcent}%</span>];
  }
}
