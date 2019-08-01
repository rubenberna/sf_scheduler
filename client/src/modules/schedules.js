import moment from 'moment'

const contracts = () => {
  let firstSchedule = new Date()
  firstSchedule.setHours(4)
  firstSchedule.setMinutes(5)

  let secondSchedule = new Date()
  secondSchedule.setHours(10)
  secondSchedule.setMinutes(5)

  let thirdSchedule = new Date()
  thirdSchedule.setHours(17)
  thirdSchedule.setMinutes(5)

  const schedules = [moment(firstSchedule), moment(secondSchedule), moment(thirdSchedule)]
  return schedules
}

const nps = () => {
  let firstSchedule = new Date()
  firstSchedule.setHours(5)
  firstSchedule.setMinutes(5)

  let secondSchedule = new Date()
  secondSchedule.setHours(11)
  secondSchedule.setMinutes(5)

  let thirdSchedule = new Date()
  thirdSchedule.setHours(18)
  thirdSchedule.setMinutes(5)

  const schedules = [moment(firstSchedule), moment(secondSchedule), moment(thirdSchedule)]
  return schedules
}

export default {
  contracts,
  nps
}
