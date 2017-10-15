import { request, config, mockRequest } from 'utils'

const { api } = config
const { userLogout } = api

// export async function logout (payload) {
//   return request({
//     url: userLogout,
//     method: 'get',
//     data: params,
//   })
// }

export async function logout (payload) {
  return mockRequest({
    success: true,
  })
}
