const express = require('express')
const router = express.Router()
const scheduler = require('../scheduler/schedule').current;
const NpsJob = require('../jobs/npsJob')

router.post('/', async (req, res) => {
  scheduler.run(new NpsJob("npsjobs_ondemand"));
  res.status(201).end(); 
})

module.exports = router