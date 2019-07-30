const express = require('express')
const router = express.Router()
const session = require('express-session')

// 2. Update field to trigger process builder in Salesforce
const updateFields = (record) => {
  const org = session.org

  // 2. Update the number of records attempt on SF
  org.sobject("Contact").update({
    Id: record.Id,
    NPS_emails_sent__c: record.NPS_emails_sent__c === null ? 1 : record.NPS_emails_sent__c + 1
  }, (err, ret) => {
    if (err || !ret.success) { return console.error(err, ret); }
    console.log('Updated Successfully : ' + ret.id);
  })
}

// 1. Get all records who's next nps date is today
router.post('/', async (req, res) => {
  const org = session.org
  const q = 'SELECT Id, Name, Next_NPS_date__c, NPS_emails_sent__c FROM Contact WHERE Next_NPS_date__c = TODAY'

  await org.query(q, (err, result) => {
    if (!err && result.records) {
      for (let record of result.records) {
        console.log(record);
        updateFields(record)
      }
      res.status(201).send(result.records)
    } else res.status(404).send('No records found', err)
  })
})

module.exports = router