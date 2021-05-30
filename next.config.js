
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['nhWCbivEpvD6hNAgVBpCv9'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  