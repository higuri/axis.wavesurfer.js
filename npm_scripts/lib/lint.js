// lib/lint.js
const path = require('path');
const {run} = require('./npmbin.js');

// doLint()
function doLint(target) {
  return run('tslint', [
    '--config', path.join(target, 'tslint.json'),
    '--project', path.join(target, 'tsconfig.json')
  ]);
}

// lintSrc()
function lintSrc() {
  return doLint('src');
}

// lintTest()
function lintTest() {
  return doLint('test');
}

// clean()
function clean() {
}

module.exports = { doLint, lintSrc, lintTest, clean };
