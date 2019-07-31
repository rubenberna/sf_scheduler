const  firebase = require ('../firebase/firebaseInit')

const fetchContractsData = async () => {
  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1 )
  const snapshot = await firebase.contracts.where('date', '==', yesterday).get()
  return snapshot.docs.map(doc => doc.data())
}

const fetchNpsData = async () => {
  const snapshot = await firebase.nps.get()
  let emails = []
  await snapshot.docs.map(doc => emails.push(doc.data()))
  return emails
}

const addContractsData = (data) => {
  console.log(`contracts data: ${data.emails.length}`);
  firebase.contracts.add(data)
}

const addNpsData = (data) => {
  console.log(`nps data: ${data.emails.length}`);
  firebase.nps.add(data)
}

module.exports = {
  fetchContractsData,
  fetchNpsData,
  addContractsData,
  addNpsData
}