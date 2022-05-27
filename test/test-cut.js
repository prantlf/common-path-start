const test = require('tehanu')('cutCommonPathStart')
const { strictEqual } = require('assert')
const { cutCommonPathStart } = require('..')
const { pathsWithCommonStart, pathsWithoutCommonStart, absolutePaths } = require('./data')

test('with no file paths returns empty array', () => {
  const restPaths = cutCommonPathStart([])
  strictEqual(restPaths.length, 0)
})

test('detects file paths without a common start', () => {
  const restPaths = cutCommonPathStart(pathsWithoutCommonStart)
  strictEqual(restPaths, pathsWithoutCommonStart)
})

test('detects file paths with a common start', () => {
  const restPaths = cutCommonPathStart(pathsWithCommonStart)
  strictEqual(restPaths.length, pathsWithoutCommonStart.length)
  restPaths.forEach((restPath, index) =>
    strictEqual(restPath, pathsWithoutCommonStart[index]))
})

test('detects a common start in absolute paths', () => {
  const restPaths = cutCommonPathStart(absolutePaths)
  strictEqual(restPaths.length, pathsWithoutCommonStart.length)
  restPaths.forEach((restPath, index) =>
    strictEqual(restPath, pathsWithoutCommonStart[index]))
})
