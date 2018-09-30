// build_watch.js
const {buildSrc} = require('./lib/build.js');

(async () => {
  try {
    await buildSrc(true);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
