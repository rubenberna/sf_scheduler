const firebase = require('firebase')
const firebaseConfig = require('./firebaseConfig')
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const contracts = db.collection('contracts')
const nps = db.collection('nps')

module.exports = {
  contracts,
  nps
}