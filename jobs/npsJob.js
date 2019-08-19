const session = require('express-session');
const Job = require('./Job');
const delighted = require('../config/delighted')
const db = require('../config/firebase/db')

// 1. Get all records who's next nps date is today
const q = "SELECT Id, Name, Email, Next_NPS_date__c, Status__c, NPS_emails_sent__c FROM Contact WHERE (Next_NPS_date__c = TODAY AND Email != null AND Type__c != 'Sollicitant') AND (Status__c = 'Geboekt' OR Status__c = 'On Hold' OR Status__c = 'Open')"

// const q = "SELECT Id, Name, Email, Next_NPS_date__c, Status__c, NPS_emails_sent__c FROM Contact WHERE Email = 'davi.verstraeten@gmail.com'"

class NpsJob extends Job {

  getQuery() { return q; };
  
  saveData(data) {
    db.addNpsData(data)
  }

  processRecord(record){
    let nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + 42)

    session.org.sobject("Contact").update({
      Id: record.Id,
      Next_NPS_date__c: nextDate,
      NPS_emails_sent__c: record.NPS_emails_sent__c === null ? 1 : record.NPS_emails_sent__c + 1
    }, (err, ret) => {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log('Updated Successfully : ' + ret.id);
    })
    delighted.sendSurvey(record.Email)
  }
}

module.exports = NpsJob 