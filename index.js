'use strict';

const npmCheck = require('npm-check');
const semver = require('semver');

npmCheck({
    global: true
}).then((currentState) => {
    const packagesList = [];
    const packages = currentState.get('packages');
    packages.forEach((packageObject) => {
        if (!packageObject.installed || !packageObject.latest) {
            return;
        }
        if (!semver.lt(packageObject.installed, packageObject.latest)) {
            return;
        }
        packagesList.push(`${packageObject.moduleName}@${packageObject.latest}`);
    })
    console.log(packagesList.join(' '));
})
.catch((err) => {
    console.log(err.message);
});