import { fetchApiIntegrations } from 'services/setup'

export default {
  namespace: 'transactions',
  state: {
    apiIntegrations: [],
  },
  subscriptions: {
    init ({ dispatch }) {
      dispatch({ type: 'fetchApiIntegrations' })
    },
  },
  effects: {
    * fetchApiIntegrations (action, { call, put }) {
      const data = yield call(fetchApiIntegrations)
      if (data.success) {
        yield put({ type: 'apiIntegrations', apiIntegrations: data.integrations })
      } else {
        throw (data)
      }
    },
  },
  reducers: {
    apiIntegrations (state, { apiIntegrations }) {
      return {
        ...state,
        apiIntegrations,
      }
    },
  },
}
