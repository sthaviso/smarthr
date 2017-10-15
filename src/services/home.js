import { request, config, mockRequest } from 'utils'

const { api } = config
const { users } = api

// export async function login (payload) {
//   return request(userLogin, {
//     method: 'post',
//     body: payload,
//   })
// }

export async function fetchUsers (payload) {
  return mockRequest({
    success: true,
    users: [{
      id: 1,
      fullName: 'Nelle Blake',
      email: 'nblake@gmail.com',
      invitation: 'SENT',
    }, {
      id: 2,
      fullName: 'Ellen Powers',
      email: 'ellen.powers@gmail.com',
      invitation: 'ACCEPTED',
    }, {
      id: 3,
      fullName: 'Alexander Reese',
      email: 'alexreese@gmail.com',
      invitation: 'ACCEPTED',
    }],
  })
}
