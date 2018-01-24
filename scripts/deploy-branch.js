#!/usr/bin/env node
'use strict';
require('shelljs/global');
var path = require('path');

set('-e');
set('-v');

var branch = process.env.TRAVIS_BRANCH && process.env.TRAVIS_BRANCH.toLowerCase();
if (branch && branch !== 'gh-pages') {
  
  // Setup ReDoc
  var branchPath = path.join('.tmp', 'preview', branch, '/');
  mkdir('-p', branchPath);
  cp('web/index.html', branchPath);
  cp('-R', 'spec/*', branchPath);
  
  // Setup SwaggerUI
  var SWAGGER_UI_DIST = path.dirname(require.resolve('swagger-ui'));
  var swaggerPath = path.join(branchPath, 'swagger-ui', '/');
  rm('-rf', swaggerPath);
  cp('-R', SWAGGER_UI_DIST, swaggerPath);
  sed('-i', 'http://petstore.swagger.io/v2/swagger.json', '../openapi.yaml', path.join(swaggerPath, 'index.html'));
  exec('deploy-to-gh-pages --update .tmp');
}
