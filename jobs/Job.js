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

  async execute(scheduler){
    scheduler.addLog(Date.now() + ": started to execute " + this.name);
    await session.org.query(this.getQuery(), (err, result) => {
      if(!err && result.records) result.records.forEach(record => this.processRecord(record));
    })
    scheduler.addLog(Date.now() + ": finished executing " + this.name);
  }
}

module.exports = Job