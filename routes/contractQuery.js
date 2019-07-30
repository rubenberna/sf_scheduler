const express = require('express')
const router = express.Router()
const session = require('express-session')
const scheduler = require('../scheduler/schedule').current;
const ContractJob = require('../jobs/contractsJob');

// 1. Get all records who didn't sign and the next contact date is today
router.post('/', async (req, res) => {
  console.log("starting a contractsjob on demand..");
  new ContractJob(scheduler, "contractsjob_ondemand").executeAsync()
  res.status(201).end(); 
})

module.exports = router