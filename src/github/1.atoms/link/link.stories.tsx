import { h } from '@stencil/core';

export default {
  title: 'GH Link',
  component: 'gh-a',
  parameters: {
    viewmode: 'story'
  }
};

export const Basic = () => (
  <div>
    <gh-a url={'https://google.co.uk'}>Link</gh-a>
    <br />
    <gh-a url={'https://google.fr'} align={'left'} class={'underline'}>
      Link left aligned
    </gh-a>
  </div>
);
