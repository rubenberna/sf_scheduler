import moment from 'moment'

const getToday = (data) => {
  
  let array = []
  const today = moment().format("MMM Do YY"); 
  data.forEach(element => {   
    if (moment(element.date).format("MMM Do YY") === today) {
      array.push(element)   
    }
  });
  return array
}

const getThisWeek = (data) => {
  // console.log(data);
  const thisWeek = moment().week()
  let array = []
  data.forEach(element => {
    if (moment(element.date).week() === thisWeek) {
      array.push(element)
    }
  });
  return array
}

const getThisMonth = (data) => {
  // console.log(data);
  const thisMonth = moment().format('M YY')
  let array = []
  data.forEach(element => {    
    if (moment(element.date).format('M YY') === thisMonth) { 
      array.push(element)
    }
  });
  return array
}

export default  {
  getToday,
  getThisWeek,
  getThisMonth
}