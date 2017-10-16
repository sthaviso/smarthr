import { fetchUsers, fetchApiIntegrations } from 'services/home'

export default {
  namespace: 'home',
  state: {
    users: [],
    apiIntegrations: [],
    documentUploads: [],
  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'fetchApiIntegrations' })
      dispatch({ type: 'fetchUsers' })
    },
  },
  effects: {
    * fetchApiIntegrations (action, { call, put, select }) {
      const data = yield call(fetchApiIntegrations)
      if (data.success) {
        yield put({ type: 'apiIntegrations', apiIntegrations: data.integrations })
      } else {
        throw (data)
      }
    },
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
    apiIntegrations (state, { apiIntegrations }) {
      return {
        ...state,
        apiIntegrations,
      }
    },
  },
}
