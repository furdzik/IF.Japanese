const fs = require('fs');
const { spawnSync } = require('child_process');

module.exports = {
  onPreBuild: () => {
    console.log('netlify-plugin-preinstall furdzik! ok');
    // Netlify does not support GitHub Packages (or other private package registries besides npm).
    // options are:
    //   - Commit .npmrc to repo - However, now we have a secret token inside our repo
    //   - Environment variable in .npmrc - However, this requires all developer machines to have
    //     the same environment variable configured
    //   - Get creative with the preinstall script... :)

    // Only run this script on Netlify
    if (process.env.NETLIFY === 'true') {
      console.log('netlify-plugin-preinstall furdzik! -> process.env.NETLIFY === true ok');
      // this is a default Netlify environment variable
      // Check if .npmrc was already generated by this script.
      // If it does then do nothing (otherwise we create an infinite npm loop)
      if (process.env.NETLIFY_NPMRC_DONE !== 'true') {
        console.log('netlify-plugin-preinstall furdzik! -> process.env.NETLIFY_NPMRC_DONE !== true ok');
        // Create .npmrc
        fs.writeFileSync(
          '.npmrc',
          `//npm.pkg.github.com/:_authToken=${process.env.NPM_TOKEN}\n@${process.env.GITHUB_PACKAGE_OWNER}:registry=https://npm.pkg.github.com/\n`
        );
        fs.chmodSync('.npmrc', 0o600);
        // Run npm again, because the npm process which is executing
        // this script won't pick up the .npmrc file we just created.
        // The original npm process will continue after this second npm process finishes,
        // and when it does it will report "success Already up-to-date."
        spawnSync(
          'npm', { stdio: 'inherit', env: { ...process.env, NETLIFY_NPMRC_DONE: true } }
        );
      }
    }
  }
};