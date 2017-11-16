import { seedFirebase } from 'services/users'

export default {
  namespace: 'users',
  state: {
  },
  subscriptions: {
  },
  effects: {
    * seedFirebase ({ payload }, { put, call, select }) {
      const data = yield call(seedFirebase, payload)
    },
  },
  reducers: {
  },
}
