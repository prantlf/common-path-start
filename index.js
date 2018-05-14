'use strict'

function detectCommonPathStart (paths) {
  let commonPathCount = 0
  let commonParts
  paths.find((path, index) => {
    const parts = path.split('/')
    if (index) {
      checkCommonPathParts(parts)
    } else {
      commonParts = parts
      commonPathCount = commonParts.length - 1
    }
    if (!commonPathCount) {
      return true
    }
  })
  return {commonParts, commonPathCount}

  function checkCommonPathParts (parts) {
    parts.find((part, index) => {
      if (index >= commonPathCount) {
        return true
      }
      if (part !== commonParts[index]) {
        commonPathCount = index
        return true
      }
    })
  }
}

function getCommonPathStart (paths) {
  const {commonParts, commonPathCount} = detectCommonPathStart(paths)
  let commonPathStart = ''
  if (commonPathCount) {
    let result = []
    commonParts.find((part, index) => {
      if (index >= commonPathCount) {
        return true
      }
      result.push(part)
    })
    result.push('')
    return result.join('/')
  }
  return commonPathStart
}

function getCommonPathLength (paths) {
  const {commonParts, commonPathCount} = detectCommonPathStart(paths)
  let commonPathLength = 0
  if (commonPathCount) {
    commonParts.find((part, index) => {
      if (index >= commonPathCount) {
        return true
      }
      commonPathLength += part.length + 1
    })
  }
  return commonPathLength
}

function cutCommonPathStart (paths) {
  const commonPathLength = getCommonPathLength(paths)
  if (commonPathLength) {
    return paths.map(path => path.substr(commonPathLength))
  }
  return paths
}

module.exports = {
  getCommonPathStart,
  getCommonPathLength,
  cutCommonPathStart
}
