/* eslint-env node */
const execSync = require('child_process').execSync;

module.exports = {
  afterPush: function() {
    // publish to gh-pages
    let ghPages = execSync('bash gh-pages.sh', { encoding: 'utf8' });
    console.log(ghPages);

    // publish to npm
    let npm = execSync('npm publish', { encoding: 'utf8' });
    console.log(npm);
  }
};
