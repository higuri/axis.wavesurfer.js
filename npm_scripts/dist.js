// dist.js
const fs = require('fs-extra');
const path = require('path');
const {clean, buildSrc, builtSrcDir} = require('./lib/build.js');
const dist = 'dist';
const extnames = ['.js', '.ts'];

(async() => {
  try {
    clean(); 
    await buildSrc();
    fs.removeSync(dist);
    fs.mkdirSync(dist);
    fs.readdirSync(builtSrcDir)
    .filter((fname) => {
      const extname = path.extname(fname);
      return extnames.includes(extname);
    })
    .forEach((fname) => {
      fs.copySync(
        path.join(builtSrcDir, fname),
        path.join(dist, fname));
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
