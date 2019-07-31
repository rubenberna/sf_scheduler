const session = require('express-session');

class Job {
  
  constructor(name){ 
    this.name = name
  }

  executeAsync(scheduler) { 
    setTimeout(() => { 
      this.execute(scheduler)
    }) 
  }

  filterEmails(records) {
    let emails = []
    for (let record of records) {
      emails.push(record.Email)
    }
    return emails
  }

  async execute(scheduler){
    scheduler.addLog(Date.now() + ": started to execute " + this.name);
    await session.org.query(this.getQuery(), (err, result) => {
      if(!err && result.records) { 
        const emails = this.filterEmails(result.records)
        const data = {
          date: new Date(),
          nr_processed: result.records.length,
          emails
        }
        this.saveData(data)
        result.records.forEach(record => this.processRecord(record))}
    })
    scheduler.addLog(Date.now() + ": finished executing " + this.name);
  }
}

module.exports = Job