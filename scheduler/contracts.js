const schedule = require('node-schedule');

let crons = []

const j = schedule.scheduleJob('* * * * *', function () {
  crons.push('test')
});


module.exports = crons