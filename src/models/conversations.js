import { getTickets, getMessages, submitMessage } from 'services/users'

export default {
  namespace: 'conversations',
  state: {
    tickets: [],
    users: {},
    selectedTicket: {},
    messages: [],
  },
  subscriptions: {
    init ({ dispatch }) {
      dispatch({ type: 'fetchTickets' })
    },
  },
  effects: {
    * fetchTickets (action, { call, put }) {
      const data = yield call(getTickets)
      if (data) {
        yield put({ type: 'tickets', tickets: data.tickets, users: data.users })
      }
    },
    * selectTicket (action, { call, put }) {
      const data = yield call(getMessages, action.ticket.id)
      yield put({ type: 'messages', selectedTicket: action.ticket, msg: data.messages })
    },
    * submitMessage (action, { call, put }) {
      const message = action.message
      const msgId = yield call(submitMessage, message)
      message.id = msgId
      yield put({ type: 'messageAdded', message })
    },
  },
  reducers: {
    tickets (state, { tickets, users }) {
      return {
        ...state,
        tickets,
        users,
      }
    },
    messages (state, { selectedTicket, msg }) {
      return {
        ...state,
        selectedTicket,
        messages: msg,
      }
    },
    messageAdded (state, { message }) {
      return {
        ...state,
        messages: [...state.messages, message],
      }
    },
  },
}
