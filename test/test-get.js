const test = require('tehanu')('getCommonPathStart')
const { strictEqual } = require('assert')
const { getCommonPathStart } = require('..')
const { pathsWithCommonStart, pathsWithoutCommonStart, absolutePaths } = require('./data')

test('with no file paths returns empty string', () => {
  const commonPathStart = getCommonPathStart([])
  strictEqual(commonPathStart, '')
})

test('detects file paths without a common start', () => {
  const commonPathStart = getCommonPathStart(pathsWithoutCommonStart)
  strictEqual(commonPathStart, '')
})

test('detects file paths with a common start', () => {
  const commonPathStart = getCommonPathStart(pathsWithCommonStart)
  strictEqual(commonPathStart, 'snapshots/')
})

test('detects a common start in absolute paths', () => {
  const commonPathStart = getCommonPathStart(absolutePaths)
  strictEqual(commonPathStart, '/')
})
