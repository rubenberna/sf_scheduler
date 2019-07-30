const express = require('express')
const router = express.Router()
const session = require('express-session')
const scheduler = require('../scheduler/schedule').current;
const NpsJob = require('../jobs/npsJob')

router.post('/', async (req, res) => {
  console.log("starting a npsjob on demand..");
  new NpsJob(scheduler, "npsjobs_ondemand").executeAsync()
  res.status(201).end(); 
})

module.exports = router