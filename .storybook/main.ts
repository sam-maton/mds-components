import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../projects/**/*.stories.ts'],
  framework: {
    name: '@storybook/angular',
    options: {
      // Point to the library's build target so Storybook picks up the
      // correct tsConfig and style preprocessor options.
      angularBrowserTarget: 'mds-components:build',
    },
  },
  addons: ['@storybook/addon-themes'],
};

export default config;
