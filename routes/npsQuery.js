const express = require('express')
const router = express.Router()
const session = require('express-session')

const delighted = require('../config/delighted')

// 2. Update field to trigger process builder in Salesforce
const updateFields = (record) => {
  const org = session.org
  let nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + 42)

  // 2. Update the number of records attempt on SF
  org.sobject("Contact").update({
    Id: record.Id,
    Next_NPS_date__c: nextDate,
    NPS_emails_sent__c: record.NPS_emails_sent__c === null ? 1 : record.NPS_emails_sent__c + 1
  }, (err, ret) => {
    if (err || !ret.success) { return console.error(err, ret); }
    console.log('Updated Successfully : ' + ret.id);
  })
}

// 1. Get all records who's next nps date is today
router.post('/', async (req, res) => {
  const org = session.org
  // const q = 'SELECT Id, Name, Email, Next_NPS_date__c, Status__c, NPS_emails_sent__c FROM Contact WHERE (Next_NPS_date__c = TOMORROW AND Email != null)'

  const q = "SELECT Id, Name, Email, Next_NPS_date__c, Status__c, NPS_emails_sent__c FROM Contact WHERE Email = 'davi.verstraeten@gmail.com'"

  await org.query(q, (err, result) => {
    if (!err && result.records) {
      for (let record of result.records) {
        updateFields(record)
        delighted.sendSurvey(record.Email)
      }
      res.status(201).send(result.records)
    } else res.status(404).send('No records found', err)
  })
})

module.exports = router