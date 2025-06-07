import type { Preview } from '@storybook/react';

import '@/styles/global.css';
import '@fontsource/maple-mono/100.css';
import '@fontsource/maple-mono/200.css';
import '@fontsource/maple-mono/300.css';
import '@fontsource/maple-mono/400.css';
import '@fontsource/maple-mono/500.css';
import '@fontsource/maple-mono/600.css';
import '@fontsource/maple-mono/700.css';
import '@fontsource/maple-mono/800.css';

const preview: Preview = {
  tags: ['autodocs'],
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
