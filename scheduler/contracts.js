const schedule = require('node-schedule');

let crons = []

// "At 04:05 of every day"
const j = schedule.scheduleJob('5 4 * * *', function () {
  crons.push('test')
});


module.exports = crons