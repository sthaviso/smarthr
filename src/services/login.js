import firebase from './firebase'


// export async function login (payload) {
//   return request(userLogin, {
//     method: 'post',
//     body: payload,
//   })
// }

export async function login (payload) {
  return new Promise((resolve) => {
    if (payload.password === 'welc0me1') {
      firebase.database().ref('users').on('value', resolve)
    }
  }).then((snapshot) => {
  // return map of users
    let users = snapshot.val()
    let user = {}
    Object.keys(users).forEach((key) => {
      users[key].id = key
      if (users[key].userType === 'A') {
        user = users[key]
      }
    })
    return {
      success: true,
      user,
    }
  })
}
