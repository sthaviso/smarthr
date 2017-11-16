import firebase from './firebase'
import { tickets } from './seeddata'

export async function seedFirebase (payload) {
  const ticketsRef = firebase.database().ref('tickets')
  const messagesRef = firebase.database().ref('messages')
  const usersRef = firebase.database().ref('users')
  ticketsRef.remove()
  messagesRef.remove()
  usersRef.remove()

  let userMap = {}
  tickets.users.forEach(
    (user) => {
      let userId = usersRef.push(user).key
      userMap[user.id] = userId
    }
  )
  let start = new Date()
  start.setDate(start.getDate() - 5)
  tickets.tickets.forEach(
    (ticket) => {
      let newTicket = Object.assign({}, ticket, {createdBy: userMap[ticket.createdBy], timestamp: start.getTime()})
      let ticketId = ticketsRef.push(newTicket).key
      let ticketIdRef = firebase.database().ref('messages/' + ticketId)
      tickets.messages.map((message) => {
        if (message.ticketId === ticket.id) {
          let newMessage = Object.assign({}, message, {ticketId : ticketId, createdBy: userMap[message.createdBy], timestamp: start.getTime()})
          start.setHours(start.getHours() + 1)
          ticketIdRef.push(newMessage)
        }
        return message
      })
      start.setDate(start.getDate() + 1)
    }
  )
}

export async function getTickets () {
  let result = {}
  return new Promise((resolve) => {
    firebase.database().ref('tickets').on('value', resolve)
  }).then((snapshot) => {
    let readtickets = snapshot.val()
    Object.keys(readtickets).forEach((key) => {
      readtickets[key].id = key
    })
    // return array of tickets
    result.tickets = Object.values(readtickets)
    return new Promise((resolve) => {
      firebase.database().ref('users').on('value', resolve)
    })
  }).then((snapshot) => {
    // return map of users
    let users = snapshot.val()
    Object.keys(users).forEach((key) => {
      users[key].id = key
    })
    result.users = users
    return result
  })
}

export async function getMessages (ticketId) {
  return new Promise((resolve) => {
    firebase.database().ref(`messages/${ticketId}`).on('value', resolve)
  }).then((snapshot) => {
    let messages = snapshot.val()
    Object.keys(messages).forEach((key) => {
      messages[key].id = key
    })
     // return array of messages
    return { messages: Object.values(messages) }
  })
}

export async function submitMessage (message) {
  let ticketIdRef = firebase.database().ref(`messages/${message.ticketId}`)
  return ticketIdRef.push(message).key
}
