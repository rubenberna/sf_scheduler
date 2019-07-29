const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');

let crons = []
router.get('/', async (req, res) => {
  const j = schedule.scheduleJob('* * * * *', function () {
    crons.push('test')
  });
  res.send(crons)
})



module.exports = router