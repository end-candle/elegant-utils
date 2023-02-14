const tsPlugin = require('rollup-plugin-typescript2');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const common = require('./common');

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'eleUtils',
    banner: common.banner,
  },
  plugins: [
    tsPlugin({
      useTsconfigDeclarationDir: true,
    }),
    nodeResolve({
      main: true,
      extensions,
    }),
    common.getCompiler(),
    common.getAlias(),
  ],
};
