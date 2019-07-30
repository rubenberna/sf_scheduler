const session = require('express-session');
const Job = require('./Job');

 // const q = 'SELECT Id, Name, Contract_Attempts__c FROM Contact WHERE (Next_contract_attempt_date__c = TODAY AND Signed_Contract__c = FALSE)'
 const q = "SELECT Id, Name, Email, Next_NPS_date__c, Status__c, NPS_emails_sent__c FROM Contact WHERE Email = 'davi.verstraeten@gmail.com'"
  
class ContractJob extends Job {

  getQuery() { return q; };
    
  processRecord(record){
    session.org.sobject("Contact").update({
      Id: record.Id,
      // we only want to just increment an attempt number, this Sent_Contract__c is only for querying and
      // actually gets updated within salesforce when an attempt is processed....
      Sent_Contract__c: Date.now() // <- shouldnt this be an increment of the step counter...?
    }, (err, ret) => {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log('Updated Successfully : ' + ret.id);
    })
  }
}


module.exports = ContractJob