// lib/clean.js
const build_clean = require('./build.js').clean;
const lint_clean = require('./lint.js').clean;

function clean() {
  build_clean();
  lint_clean();
}

module.exports = { clean };
