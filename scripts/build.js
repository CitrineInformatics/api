#!/usr/bin/env node
'use strict';
var shell = require('shelljs');
var path = require('path');

shell.set('-e');
shell.mkdir('-p', 'web_deploy')
shell.cp('-R', 'web/*', 'web_deploy/');
shell.cp('-R', 'spec/*', 'web_deploy/');

var SWAGGER_UI_DIST = path.dirname(require.resolve('swagger-ui'));
shell.rm('-rf', 'web_deploy/swagger-ui/')
shell.cp('-R', SWAGGER_UI_DIST, 'web_deploy/swagger-ui/')
shell.cp('web/swagger-ui/index.html', 'web_deploy/swagger-ui/')
shell.sed('-i', 'http://petstore.swagger.io/v2/swagger.json', '../openapi.yaml', 'web_deploy/swagger-ui/index.html')
