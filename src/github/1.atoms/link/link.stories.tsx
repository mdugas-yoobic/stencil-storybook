import { h } from '@stencil/core';

export default {
  title: 'GH/Atoms/Link',
  component: 'gh-a',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-a url={'https://google.co.uk'}>Link</gh-a>
    <br />
    <gh-a url={'https://google.fr'} class={'underline align-left'}>
      Link align-left underline
    </gh-a>
    <gh-a url={'https://google.fr'} class={'blue'}>
      Blue Link
    </gh-a>
    <gh-a url={'https://google.fr'} class={'button'}>
      Blue Link
    </gh-a>
    <gh-a url={'https://google.fr'}>
      <gh-icon type={'fas fa-code-branch medium'} color={'red'}></gh-icon>
      Icon Link
    </gh-a>
  </div>
);
