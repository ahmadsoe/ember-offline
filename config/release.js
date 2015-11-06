/* jshint node:true */
var execSync = require('child_process').execSync;

module.exports = {
  afterPush: function() {
    // publish to gh-pages
    var ghPages = execSync('bash gh-pages.sh', { encoding: 'utf8' });
    console.log(ghPages);

    // publish to npm
    var npm = execSync('npm publish', { encoding: 'utf8' });
    console.log(npm);
  }
};
