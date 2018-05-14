'use strict'

const {
  getCommonPathStart,
  getCommonPathLength,
  cutCommonPathStart
} = require('..')
const test = require('tap')

const pathsWithCommonStart = [
  'snapshots/fun/hmpg.net.html',
  'snapshots/fun/xkcd.com.html',
  'snapshots/wikimedia.org.html'
]
const pathsWithoutCommonStart = [
  'fun/hmpg.net.html',
  'fun/xkcd.com.html',
  'wikimedia.org.html'
]
const absolutePaths = [
  '/fun/hmpg.net.html',
  '/fun/xkcd.com.html',
  '/wikimedia.org.html'
]

test.test('getCommonPathStart', test => {
  test.test('with no file paths returns empty string', test => {
    const commonPathStart = getCommonPathStart([])
    test.equal(commonPathStart, '')
    test.end()
  })

  test.test('detects file paths without a common start', test => {
    const commonPathStart = getCommonPathStart(pathsWithoutCommonStart)
    test.equal(commonPathStart, '')
    test.end()
  })

  test.test('detects file paths with a common start', test => {
    const commonPathStart = getCommonPathStart(pathsWithCommonStart)
    test.equal(commonPathStart, 'snapshots/')
    test.end()
  })

  test.test('detects a common start in absolute paths', test => {
    const commonPathStart = getCommonPathStart(absolutePaths)
    test.equal(commonPathStart, '/')
    test.end()
  })

  test.end()
})

test.test('getCommonPathLength', test => {
  test.test('with no file paths returns zero', test => {
    const commonPathLength = getCommonPathLength([])
    test.equal(commonPathLength, 0)
    test.end()
  })

  test.test('detects file paths without a common start', test => {
    const commonPathLength = getCommonPathLength(pathsWithoutCommonStart)
    test.equal(commonPathLength, 0)
    test.end()
  })

  test.test('detects file paths with a common start', test => {
    const commonPathLength = getCommonPathLength(pathsWithCommonStart)
    test.equal(commonPathLength, 10)
    test.end()
  })

  test.test('detects a common start in absolute paths', test => {
    const commonPathLength = getCommonPathLength(absolutePaths)
    test.equal(commonPathLength, 1)
    test.end()
  })

  test.end()
})

test.test('cutCommonPathStart', test => {
  test.test('with no file paths returns empty array', test => {
    const restPaths = cutCommonPathStart([])
    test.equal(restPaths.length, 0)
    test.end()
  })

  test.test('detects file paths without a common start', test => {
    const restPaths = cutCommonPathStart(pathsWithoutCommonStart)
    test.equal(restPaths, pathsWithoutCommonStart)
    test.end()
  })

  test.test('detects file paths with a common start', test => {
    const restPaths = cutCommonPathStart(pathsWithCommonStart)
    test.equal(restPaths.length, pathsWithoutCommonStart.length)
    restPaths.forEach((restPath, index) =>
      test.equal(restPath, pathsWithoutCommonStart[index]))
    test.end()
  })

  test.test('detects a common start in absolute paths', test => {
    const restPaths = cutCommonPathStart(absolutePaths)
    test.equal(restPaths.length, pathsWithoutCommonStart.length)
    restPaths.forEach((restPath, index) =>
      test.equal(restPath, pathsWithoutCommonStart[index]))
    test.end()
  })

  test.end()
})
