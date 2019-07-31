const  firebase = require ('../firebase/firebaseInit')

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
  console.log('contracts data');
  
  firebase.contracts.add(data)
}

const addNpsData = (data) => {
  console.log('nps data');
  firebase.nps.add(data)
}

module.exports = {
  fetchContractsData,
  fetchNpsData,
  addContractsData,
  addNpsData
}