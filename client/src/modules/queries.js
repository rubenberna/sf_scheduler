import axios from 'axios';

export const contractQuery = async () => {
  let res = await axios.post('/contract_query')
  return res.data
}

export const npsQuery = async () => {
  let res = await axios.post('/nps_query')
  return res.data
}

export const fetchContractsData = async () => {
  let res = await axios.get('/db_query/contracts')  
  return res.data
}

export const fetchNpsData = async () => {
  let res = await axios.get('/db_query/nps')
  return res.data
}
