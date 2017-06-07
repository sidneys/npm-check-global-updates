# npm-check-global-updates [![Beta](https://img.shields.io/badge/status-beta-red.svg?style=flat)]() [![npm](https://img.shields.io/npm/v/npm-check-global-updates.svg?style=flat-square)](https://npmjs.com/package/npm-check-global-updates) [![dependencies](https://img.shields.io/david/sidneys/npm-check-global-updates.svg?style=flat-square)](https://npmjs.com/package/npm-check-global-updates) [![devDependencies](https://img.shields.io/david/dev/sidneys/npm-check-global-updates.svg?style=flat-square)](https://npmjs.com/package/desktop-dimmer)

------

<p align="center">
  <b>Find newer versions of global npm packages.</b><br>
  <b>Supports command line and programmatic usage.</b><br>
  Available for macOS, Windows and Linux.
</p>

------


## Contents

1. [Commandline Usage](#commandline_usage)
1. [Programmatic Usage](#programmatic_usage)
1. [Platform Support](#platform_support)
1. [Roadmap](#roadmap)
1. [Contribute](#contribute)
1. [Author](#author)


## <a name="commandline_usage"/></a> Commandline Usage

### Installation

```bash
$ npm install --global npm-check-global-updates
```

### Usage

```bash
$ npm-check-global-updates
```

### Show all Options

```bash
$ npm-check-global-updates --help
```

### Example

```bash
$ npm-check-global-updates
>> browserify@14.4.0 express@4.15.3
```


## <a name="programmatic_usage"/></a> Programmatic Usage

### Installation

```bash
$ npm install npm-check-global-updates
```

### API

The module returns a `Function` which returns a `Promise`.

```js
const checkGlobalUpdates = require('npm-check-global-updates')

checkGlobalUpdates()
.then((result) => {
    console.log(result);
})
```

The `Promise` resolves with an `Array`:

 - *Array* - **Package list (name@version)**

### Example

```js
const checkGlobalUpdates = require('npm-check-global-updates')

checkGlobalUpdates()
.then((packages) => {
    console.log(packages);
    // Returns:
    // [ 'browserify@14.4.0', 'express@4.15.3' ]
})
.catch((err) => {
    console.error(err);
})
```


## <a name="platform_support"/></a> Platform Support

Tested on:

- macOS Sierra
- Windows 10 Anniversary
- Ubuntu 17.10


## <a name="roadmap"/></a> Roadmap ![img](https://img.shields.io/badge/proposals-welcome-green.svg?style=flat)

- [ ] CI-based automated Testing


## <a name="contribute"/></a> Contribute ![Contribute](https://img.shields.io/badge/contributions-wanted-red.svg?style=flat-square)

Read the [contribution documentation](https://github.com/sidneys/npm-check-global-updates/blob/release/CONTRIBUTING.md) first.

- [Dev Chat](https://gitter.im/npm-check-global-updates): Talk about features and suggestions.
- [Issues](https://github.com/sidneys/npm-check-global-updates/issues) File bugs and document issues.


## <a name="author"/></a> Author

[sidneys](http://sidneys.github.io) 2017
