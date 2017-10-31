export default {
  namespace: 'overview',
  state: {
    exceptions: {
      activeIndex: 0,
    },
  },
  subscriptions: {
  },
  effects: {
  },
  reducers: {
    exceptionsIndex (state, { activeIndex }) {
      return {
        ...state,
        exceptions: {
          ...state.exceptions,
          activeIndex,
        },
      }
    },
  },
}
