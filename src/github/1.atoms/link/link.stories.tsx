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
      Link left aligned
    </gh-a>
  </div>
);
