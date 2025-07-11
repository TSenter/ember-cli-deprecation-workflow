'use strict';

const sideWatch = require('@embroider/broccoli-side-watch');
const { maybeEmbroider } = require('@embroider/test-setup');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      watchDependencies: ['ember-cli-deprecation-workflow'],
    },
    trees: {
      app: sideWatch('app', {
        watching: ['ember-cli-deprecation-workflow'],
      }),
    },
  });

  return maybeEmbroider(app);
};
