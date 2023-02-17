module.exports = {
  addons: ['@storybook/addon-essentials'],
  babel: (options) => ({
    ...options,
    plugins: [...options.plugins, [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h' }, 'preset']],
    presets: [['@babel/typescript', { jsxPragma: 'h' }]]
  }),
  framework: '@storybook/html',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [{ from: '../src/assets/fontawesome/webfonts', to: '/webfonts' }]
};
