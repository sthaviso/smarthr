import fetch from 'dva/fetch'

function parseJSON (response) {
  return response.json()
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param {string} url url for request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request (url, options) {
  const { method = 'GET', body } = options

  let fetchOptions = {
    method,
  }

  if (body) {
    fetchOptions.headers = {
      'Content-Type': 'application/json',
      body: JSON.stringify(body),
    }
  }

  return fetch(url, fetchOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }))
}

export function mockRequest (response) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 300)
  })
}
