import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [sass()],
  watchIgnoredRegex: /^.*\.stories\.tsx~?$/
};
