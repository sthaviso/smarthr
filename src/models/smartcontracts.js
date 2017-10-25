import { fetchSmartContracts } from 'services/setup'

export default {
  namespace: 'smartcontracts',
  state: {
    contracts: {
      data: [],
      selection: {},
    },
  },
  subscriptions: {
    init ({ dispatch }) {
      dispatch({ type: 'fetchSmartContracts' })
    },
  },
  effects: {
    * fetchSmartContracts (action, { call, put }) {
      const data = yield call(fetchSmartContracts)
      if (data.success) {
        yield put({ type: 'smartContracts', contracts: data.contracts })
      } else {
        throw (data)
      }
    },
  },
  reducers: {
    smartContracts (state, { contracts }) {
      return {
        ...state,
        contracts: {
          data: contracts,
          selection: {
            contract: contracts[0],
            rule: contracts[0].rules[0],
          },
        },
      }
    },
    selectContract (state, { contract }) {
      return {
        ...state,
        contracts: {
          ...state.contracts,
          selection: {
            contract,
            rule: contract.rules[0],
          },
        },
      }
    },

  },
}
