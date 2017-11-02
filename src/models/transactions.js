import { fetchApiIntegrations } from 'services/setup'

export default {
  namespace: 'transactions',
  state: {
    apiIntegrations: [],
    source: {},
    currentLI: {},
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
    selectSrc (state, { src }) {
      return {
        ...state,
        source: src,
      }
    },
    selectListItem (state, { currLI }) {
      if (!currLI || currLI.id === state.currentLI.id) {
        return {
          ...state,
          currentLI: {},
        }
      }
      return {
        ...state,
        currentLI: currLI,
      }
    },
  },
}
