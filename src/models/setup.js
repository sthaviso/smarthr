import { fetchUsers, fetchApiIntegrations, fetchDocumentUploads } from 'services/setup'

export default {
  namespace: 'setup',
  state: {
    users: [],
    apiIntegrations: [],
    documentUploads: [],
    modals: {
      integrationPicklist: false,
      restConfig: false,
    },
  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'fetchApiIntegrations' })
      dispatch({ type: 'fetchDocumentUploads' })
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
    * fetchDocumentUploads (action, { call, put, select }) {
      const data = yield call(fetchDocumentUploads)
      if (data.success) {
        yield put({ type: 'documentUploads', documentUploads: data.documents })
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
    documentUploads (state, { documentUploads }) {
      return {
        ...state,
        documentUploads,
      }
    },
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
    userDelete (state, { user }) {
      return {
        ...state,
        users: state.users.filter(u => u.id !== user.id),
      }
    },
    userAdd (state) {
      let users = state.users
      if (!state.users.filter(user => user.id === 'new').length) {
        users.unshift({
          id: 'new',
          invitation: 'PENDING',
        })
      }
      return {
        ...state,
        users,
      }
    },
    userSave (state, { user }) {
      let users = state.users.filter(u => u.id !== 'new')
      users.unshift({
        ...user,
        id: users.length + 1,
        invitation: 'SENT',
      })
      return {
        ...state,
        users,
      }
    },
  },
}
