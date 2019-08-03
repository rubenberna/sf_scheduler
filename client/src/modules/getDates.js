import moment from 'moment'

const getYesterday = (data) => {
  
  let array = []
  const yesterday = moment().subtract(1, 'days').format("MMM Do YY"); 
  data.forEach(element => {   
    if (moment(element.date).format("MMM Do YY") === yesterday) {
      array.push(element)   
    }
  });
  return array
}

const getLastWeek = (data) => {
  // console.log(data);
  const lastWeek = moment().subtract(1, 'weeks').week()
  let array = []
  data.forEach(element => {
    if (moment(element.date).week() === lastWeek) {
      array.push(element)
    }
  });
  return array
}

const getThisMonth = (data) => {
  // console.log(data);
  const thisMonth = moment().format('M YY')
  // console.log(thisMonth);
  
  let array = []
  data.forEach(element => {
    console.log(moment(element.date).format('M YY'));
    
    if (moment(element.date).format('M YY') === thisMonth) {  
      console.log(element);
      
      array.push(element)
    }
  });
  return array
}

export default  {
  getYesterday,
  getLastWeek,
  getThisMonth
}