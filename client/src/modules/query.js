import axios from 'axios';

export const query = async () => {
  let res = await axios.post('/query')
  return res.data
}
