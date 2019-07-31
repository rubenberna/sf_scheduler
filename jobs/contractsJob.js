const session = require('express-session');
const Job = require('./Job');
const db = require('../config/firebase/db')

const q = 'SELECT Id, Name, Email FROM Contact WHERE (Next_contract_attempt_date__c = TODAY AND Signed_Contract__c = FALSE)'
// const q = "SELECT Id, Name, Email, Contract_Attempts__c, Reminders__c FROM Contact WHERE Email = 'davi.verstraeten@gmail.com'"
  
class ContractJob extends Job {

  getQuery() { return q; };

  saveData(data) {
    db.addContractsData(data)
  }
    
  processRecord(record){
    session.org.sobject("Contact").update({
      Id: record.Id,
      Reminders__c: record.Reminders__c === null ? 1 : record.Reminders__c + 1,
    }, (err, ret) => {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log('Updated Successfully : ' + ret.id);
    })
  }
}

module.exports = ContractJob