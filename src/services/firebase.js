/**
 * Created by sthavisomboon on 7/6/17.
 */

import * as firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBpaxEdELDQ8KtrD6uOEbJdLglS1Pu_ODE',
  authDomain: 'smart-hr-c22f8.firebaseapp.com',
  databaseURL: 'https://smart-hr-c22f8.firebaseio.com',
  projectId: 'smart-hr-c22f8',
  storageBucket: 'smart-hr-c22f8.appspot.com',
  messagingSenderId: '879055554795',
}

firebase.initializeApp(config)

export default firebase
