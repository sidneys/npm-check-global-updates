'use strict';


/**
 * Modules
 * External
 * @constant
 */
const npmCheck = require('npm-check');
const semver = require('semver');


/**
 * Shorten and anonymize urls
 * @returns {Promise} Shortened and anonymized URL
 */
let checkGlobalUpdates = () => {
    return new Promise((resolve, reject) => {
        npmCheck({ global: true })
            .then((currentState) => {
                const packages = currentState.get('packages') || [];
                const packagesList = [];

                packages.forEach((packageObject) => {
                    // Ensure version information is available
                    if (!packageObject.installed || !packageObject.latest) { return; }
                    // Check if installed version is smaller than latest version
                    if (!semver.lt(packageObject.installed, packageObject.latest)) { return; }

                    packagesList.push(`${packageObject.moduleName}@${packageObject.latest}`);
                });

                resolve(packagesList);
            })
            .catch((err) => {
                reject(err);
            });
    });
};


/**
 * Commandline interface
 */
if (require.main === module) {
    checkGlobalUpdates()
        .then((packagesList) => {
            console.log(packagesList.join(' '));
        })
        .catch((err) => {
            console.error(err.message);
        });
}


/**
 * @exports
 */
module.exports = checkGlobalUpdates;
