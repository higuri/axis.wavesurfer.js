// build.js
const {buildSrc} = require('./lib/build.js');

(async() => {
  try {
    await buildSrc(false);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
