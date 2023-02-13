import { Component, h } from '@stencil/core';

@Component({
  tag: 'gh-package-section',
  // styleUrl: 'package-section.css',
  shadow: true
})
export class GhPackageSection {
  render() {
    return (
      <div>
        <h3>Packages</h3>
        <p>No packages published</p>
        <gh-a class={'align-left underline blue'}>Publish your first package</gh-a>
      </div>
    );
  }
}
