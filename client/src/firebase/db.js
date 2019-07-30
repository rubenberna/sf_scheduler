import firebase from '../firebase/firebaseInit'

const fetchContractsData = async () => {
  const snapshot = await firebase.contracts.get()
  let emails = []
  await snapshot.docs.map(doc => emails.push(doc.data()))
  return emails
}

const fetchNpsData = async () => {
  const snapshot = await firebase.nps.get()
  let emails = []
  await snapshot.docs.map(doc => emails.push(doc.data()))
  return emails
}

const addContractsData = (data) => {
  firebase.contracts.add(data)
}

const addNpsData = (data) => {
  firebase.nps.add(data)
}

export default {
  fetchContractsData,
  fetchNpsData,
  addContractsData,
  addNpsData
}