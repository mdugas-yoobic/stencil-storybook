import { Component, h } from '@stencil/core';

@Component({
  tag: 'gh-release-section',
  // styleUrl: 'release-section.css',
  shadow: true
})
export class GhReleaseSection {
  render() {
    return (
      <div>
        <h3>Releases</h3>
        <p>No releases published</p>
        <gh-a class={'align-left underline blue'}>Create a new release</gh-a>
      </div>
    );
  }
}
