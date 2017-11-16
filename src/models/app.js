import { parse } from 'qs'
import { logout } from 'services/app'
import { routerRedux } from 'dva/router'
import queryString from 'query-string'

export default {
  namespace: 'app',
  state: {
    auth: {},
    locationPathname: '',
    locationQuery: {},
    collapsed: false,
    user: {},
  },
  subscriptions: {
    setupHistory ({ dispatch, history }) {
      return history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          },
        })
      })
    },
    checkAuth ({ dispatch }) {
      dispatch({ type: 'checkAuth' })
    },
  },
  effects: {
    * checkAuth (action, { put, select }) {
      const { auth, locationPathname } = yield select(_ => _.app)
      if ((!auth || !auth.id) && locationPathname !== '/login') {
        yield put(routerRedux.push({
          pathname: '/login',
          search: queryString.stringify({
            from: locationPathname,
          }),
        }))
      }
    },
    * logout ({ payload }, { call, put }) {
      const data = yield call(logout, parse(payload))
      if (data.success) {
        yield put({ type: 'loggedOut' })
        yield put(routerRedux.push({ pathname: '/login' }))
      } else {
        throw (data)
      }
    },
    * navigate ({ pathname }, { put }) {
      yield put(routerRedux.push({ pathname }))
    },
  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    loggedIn (state, { auth, user }) {
      return {
        ...state,
        auth,
        user,
      }
    },
    loggedOut (state) {
      return {
        ...state,
        auth: {},
      }
    },
    collapse (state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      }
    },
  },
}
