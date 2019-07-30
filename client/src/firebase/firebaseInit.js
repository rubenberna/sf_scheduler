import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const contracts = db.collection('contracts')
const nps = db.collection('nps')

export default {
  contracts,
  nps
}