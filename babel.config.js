module.exports = {
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        targets: {
          browser: 'last 2 versions, > 1%, ie >= 11, Chrome >= 45, safari >= 10',
          node: '0.12',
        },
        modules: false,
        loose: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
  exclude: ['node_modules/**'],
};
