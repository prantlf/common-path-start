const test = require('tehanu')('getCommonPathLength')
const { strictEqual } = require('assert')
const { getCommonPathLength, } = require('..')
const { pathsWithCommonStart, pathsWithoutCommonStart, absolutePaths } = require('./data')

test('with no file paths returns zero', () => {
  const commonPathLength = getCommonPathLength([])
  strictEqual(commonPathLength, 0)
})

test('detects file paths without a common start', () => {
  const commonPathLength = getCommonPathLength(pathsWithoutCommonStart)
  strictEqual(commonPathLength, 0)
})

test('detects file paths with a common start', () => {
  const commonPathLength = getCommonPathLength(pathsWithCommonStart)
  strictEqual(commonPathLength, 10)
})

test('detects a common start in absolute paths', () => {
  const commonPathLength = getCommonPathLength(absolutePaths)
  strictEqual(commonPathLength, 1)
})
