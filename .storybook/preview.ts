import type { Preview } from '@storybook/angular';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

// Load all MDS design token CSS custom properties (primitive + semantic).
// The actual stylesheet is injected via the "styles" option in angular.json
// (see the storybook / build-storybook architect targets), which lets Angular's
// CSS pipeline process the @import rules correctly.

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
