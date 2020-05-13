'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('./plugins/demos/docs-link-update');
var scully_1 = require('@scullyio/scully');
scully_1.setPluginConfig('md', { enableSyntaxHighlighting: true });
require('./plugins/demos/docs-link-update');
exports.config = {
  projectRoot: './ng-projects/scullyDocs/src',
  projectName: 'scullyDocs',
  outDir: './dist/static',
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      postRenderers: ['docsLink'],
      slug: {
        folder: './docs'
      }
    }
  }
};
