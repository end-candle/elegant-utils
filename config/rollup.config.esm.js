const tsPlugin = require('rollup-plugin-typescript2');

const common = require('./common');

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    banner: common.banner,
  },
  plugins: [
    tsPlugin({
      useTsconfigDeclarationDir: true,
    }),
    common.getCompiler(),
    common.getAlias(),
  ],
};
