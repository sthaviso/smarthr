import { routerRedux } from 'dva/router'
import { login } from 'services/login'

export default {
  namespace: 'login',
  state: {},
  effects: {
    * login ({ payload }, { put, call, select }) {
      const data = yield call(login, payload)
      const { locationQuery } = yield select(_ => _.app)

      if (data.success) {
        const { from } = locationQuery
        yield put({ type: 'app/loggedIn', auth: data, user: data.user })
        if (from && from !== '/login') {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/overview'))
        }
      } else {
        throw data
      }
    },
  },
}
