import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'assets/fontawesome/webfonts', dest: 'webfonts' }]
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'assets/fontawesome/webfonts', dest: 'webfonts' }]
    }
  ],
  plugins: [sass()],
  watchIgnoredRegex: /^.*\.stories\.tsx~?$/
};
