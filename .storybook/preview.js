import '../lib/tailwind.css';

export const parameters = {
  backgrounds: {
    default: 'neutral-900',
    values: [
      {
        name: 'neutral-900',
        value: '#171717'
      },
      {
        name: 'neutral-100',
        value: '#f5f5f5'
      },
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}