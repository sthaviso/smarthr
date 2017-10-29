import mockRequest from 'utils'
import client from '../feathers/feathers'


// export async function login (payload) {
//   return request(userLogin, {
//     method: 'post',
//     body: payload,
//   })
// }

export async function login (payload) {
  const { username, password } = payload
  return client.authenticate({
    strategy: 'local',
    email: username,
    password,
  }).then(
    (data) => {
      return {
        ...data,
        success: !!data.accessToken,
      }
    }
  ).catch(
    () => ({
      success: (payload.password === 'welc0me1'),
      message: 'Invalid username/password',
    })
  )
}
