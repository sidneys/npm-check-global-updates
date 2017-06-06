#!/usr/bin/env node
'use strict';


/**
 * Modules
 * Node
 * @constant
 */
const child_process = require('child_process');
const path = require('path');

/**
 * Modules
 * External
 * @constant
 */
const appRootPath = require('app-root-path');

/**
 * Modules
 * Configuration
 */
appRootPath.setPath(path.join(__dirname, '..'));

/**
 * Modules
 * Internal
 * @constant
 */
const packageJson = require(path.join(appRootPath.path, 'package.json'));


/**
 * Filesystem
 * @constant
 * @default
 */
const applicationPath = path.join(appRootPath.path, packageJson.main);
const argumentsList = [applicationPath].concat(process.argv.slice(2));


/**
 * Run module
 */
child_process.spawnSync(`node`, argumentsList, {
    cwd: appRootPath.path,
    stdio: 'inherit'
});
