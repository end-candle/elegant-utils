const pkg = require('../package.json');
const babel = require('@rollup/plugin-babel');
const alias = require('@rollup/plugin-alias');
const path = require('path');

const name = pkg.name;
const version = pkg.version;
const license = pkg.license;

const banner = `/*!
 * ${name} ${version}
 * Licensed under ${license}
 */`;

exports.banner = banner;

function getCompiler(opt) {
  return babel({
    babelrc: true,
    babelHelpers: 'runtime',
  });
}

exports.getCompiler = getCompiler;

function getAlias(opt) {
  return alias({
    entries: [{ find: '@', replacement: path.resolve(__dirname, '../src') }],
  });
}

exports.getAlias = getAlias;
