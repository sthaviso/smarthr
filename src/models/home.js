import { fetchUsers } from 'services/home'

export default {
  namespace: 'home',
  state: {
    users: []
  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'fetchUsers' })
    },
  },
  effects: {
    * fetchUsers (action, { call, put, select }) {
      const data = yield call(fetchUsers)
      if (data.success) {
        yield put({ type: 'users', users: data.users })
      } else {
        throw (data)
      }
    },
  },
  reducers: {
    users (state, { users }) {
      return {
        ...state,
        users,
      }
    },
  },
}
