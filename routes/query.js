const express = require('express')
const router = express.Router()
const session = require('express-session')

const updateFields = (record) => {
  const org = session.org

  // 2. Update the number of records attempt on SF
  org.sobject("Contact").update({
    Id: record.Id,
    Contract_Attempts__c: Number(record.Contract_Attempts__c) + 1
  }, (err, ret) => {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log('Updated Successfully : ' + ret.id);
  })
}

// 1. Get all records who didn't sign and the next contact date is today
router.post('/', async (req, res) => {
  const org = session.org
  const q = 'SELECT Id, Name, Contract_Attempts__c FROM Contact WHERE (Next_contract_attempt_date__c = TODAY AND Signed_Contract__c = FALSE)'

  await org.query(q, (err, result) => {
    if(!err && result.records) {
      for (let record of result.records) {
        updateFields(record)
      } 
      res.status(201).send(result.records) 
    } else res.status(404).send('No records found', err)
  })
})


module.exports = router