const express = require('express')
const router = express.Router()
const db = require('../config/firebase/db')

router.get('/contracts', async (req, res) => {
  const records = await db.fetchContractsData()
  res.status(201).send(records)
})

router.get('/nps', async (req, res) => {
  const records = await db.fetchNpsData()  
  res.status(201).send(records)
})

module.exports = router