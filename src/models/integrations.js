import { fetchApiIntegrations, fetchDocumentUploads } from 'services/setup'

export default {
  namespace: 'integrations',
  state: {
    apiIntegrations: [],
    documentUploads: [],
    modals: {
      integrationPicklist: false,
      restConfig: false,
      templatePicklist: false,
    },
  },
  subscriptions: {
    init ({ dispatch }) {
      dispatch({ type: 'fetchApiIntegrations' })
      dispatch({ type: 'fetchDocumentUploads' })
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
    * fetchDocumentUploads (action, { call, put }) {
      const data = yield call(fetchDocumentUploads)
      if (data.success) {
        yield put({ type: 'documentUploads', documentUploads: data.documents })
      } else {
        throw (data)
      }
    },
  },
  reducers: {
    toggleModal (state, { modals }) {
      return {
        ...state,
        modals: {
          ...state.modals,
          ...modals,
        },
      }
    },
    saveApiIntegration (state, { integration }) {
      const apiIntegrations = state.apiIntegrations
      apiIntegrations.push({
        ...integration,
        id: apiIntegrations.length + 1,
      })
      return {
        ...state,
        apiIntegrations,
      }
    },
    saveTemplate (state, { template }) {
      return {
        ...state,
        template,
      }
    },
  },
}
