const express = require('express')
const router = express.Router()
const scheduler = require('../scheduler/schedule').current;
const ContractJob = require('../jobs/contractsJob');


router.post('/', async (req, res) => {
  scheduler.run(new ContractJob("contractsjob_ondemand"));
  res.status(201).end(); 
})

module.exports = router