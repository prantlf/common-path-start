# common-path-start

[![Latest version](https://img.shields.io/npm/v/common-path-start)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/common-path-start)
](https://www.npmjs.com/package/common-path-start)
[![Coverage](https://codecov.io/gh/prantlf/common-path-start/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/common-path-start)

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

You need [node >= 6][node]. Install the package using your favourite package manager:

```sh
npm i common-path-start
pnpm i common-path-start
yarn add common-path-start
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

## License

Copyright (c) 2018-2022 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
