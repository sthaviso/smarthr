import { request, config, mockRequest } from 'utils'

const { api } = config
const { userLogin } = api

// export async function login (payload) {
//   return request(userLogin, {
//     method: 'post',
//     body: payload,
//   })
// }

export async function login (payload) {
  return mockRequest({
    id: 'accesstoken',
    userId: 1,
    role: 'admin',
    success: true,
  })
}
