import { Config } from '@stencil/core';
import { reactOutputTarget } from "@stencil/react-output-target"
export const config: Config = {
  namespace: 'ui-components',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@luknasc/ui-components',
      proxiesFile: '../stencil-ds-react-template/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
