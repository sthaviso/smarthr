/**
 * Created by sthavisomboon on 7/6/17.
 */

import * as firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDjFmZigu4qNygA-CCRYUr1_giALjGlX6s',
  authDomain: 'reduxticket.firebaseapp.com',
  databaseURL: 'https://reduxticket.firebaseio.com',
  projectId: 'reduxticket',
  storageBucket: 'reduxticket.appspot.com',
  messagingSenderId: '469841745728',
}

firebase.initializeApp(config)

export default firebase
