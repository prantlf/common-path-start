# common-path-start

[![NPM version](https://badge.fury.io/js/common-path-start.png)](http://badge.fury.io/js/common-path-start)
[![Build Status](https://travis-ci.org/prantlf/common-path-start.svg?branch=master)](https://travis-ci.org/prantlf/common-path-start)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM Downloads](https://nodei.co/npm/common-path-start.png?downloads=true&stars=true)](https://www.npmjs.com/package/common-path-start)

Detects the same starting part of the path in an array of file paths and returns it, its length, or it cuts it from the specified file paths.

## Example

If you have the following file paths:

```text
snapshots/fun/hmpg.net.html
snapshots/fun/xkcd.com.html
snapshots/wikimedia.org.html
```

This plugin lets you detects "snapshots/" as the common path start, its length 10 characters, or cut the common start from every file path producing:

```text
fun/hmpg.net.html
fun/xkcd.com.html
wikimedia.org.html
```

## Installation

You need [node >= 6][node] and [npm] installed. You may install this module with the following command:

```sh
$ npm install common-path-start --save
```

## Programmatic Usage

This module exports several static functions operating on file paths, which use forward slash as a separator.

```js
const {getCommonPathStart} = require('common-path-start')
const paths = [
  'snapshots/fun/hmpg.net.html',
  'snapshots/fun/xkcd.com.html',
  'snapshots/wikimedia.org.html'
]
const commonPathStart = getCommonPathStart(paths) // "snapshots/"
```

### getCommonPathStart (paths) : string

Expects an array of strings with file paths and returns a string with the common path start, or an empty string, if there is no common starting directory among all file paths.

### getCommonPathLength (paths) : number

Expects an array of strings with file paths and returns the count of characters of the common path start, or zero, if there is no common starting directory among all file paths.

### cutCommonPathStart (paths) : array

Expects an array of strings with file paths and returns a new array with file paths with the common path start cut away, or the same file path array, if there is no common starting directory among all file paths.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History

 * 2018-05-14   v0.0.1   Initial release

## License

Copyright (c) 2018-2019 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
