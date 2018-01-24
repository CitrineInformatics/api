#!/usr/bin/env node
'use strict';
var shell = require('shelljs');
var path = require('path');

shell.set('-e');
shell.set('-v');

var branch = process.env.TRAVIS_BRANCH && process.env.TRAVIS_BRANCH.toLowerCase();
if (branch && branch !== 'gh-pages') {
  
  // Setup ReDoc
  var branchPath = path.join('.tmp', 'preview', branch, '/');
  shell.mkdir('-p', branchPath);
  shell.cp('web/index.html', branchPath);
  shell.cp('-R', 'spec/*', branchPath);
  
  // Setup SwaggerUI
  var SWAGGER_UI_DIST = path.dirname(require.resolve('swagger-ui-dist'));
  var swaggerPath = path.join(branchPath, 'swagger-ui', '/');
  shell.rm('-rf', swaggerPath);
  shell.cp('-R', SWAGGER_UI_DIST, swaggerPath);
  shell.sed('-i', 'http://petstore.swagger.io/v2/swagger.json', '../openapi.yaml', path.join(swaggerPath, 'index.html'));
  shell.exec('deploy-to-gh-pages --update .tmp');
}
