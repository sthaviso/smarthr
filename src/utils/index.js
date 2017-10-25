import config from './config'
import { request, mockRequest } from './request'

const chunkArray = (arr, size, withPadding, padWith) => {
  let ret = []
  for (let index = 0; index < arr.length; index += size) {
    let chunk = arr.slice(index, index + size)
    if (chunk.length < size && withPadding) {
      while (chunk.length < size) {
        chunk.push(padWith)
      }
    }
    ret.push(chunk)
  }
  return ret
}

module.exports = {
  config,
  request,
  mockRequest,
  utils: {
    chunk: chunkArray,
  },
}
