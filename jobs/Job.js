const session = require('express-session');

class Job {
  constructor(scheduler, name){
    this.scheduler = scheduler
    this.name = name
  }

  executeAsync() { setTimeout(() => { this.execute()}) }

  async execute(){
    this.scheduler.addLog(Date.now() + ": started to execute " + this.name);
    await session.org.query(this.getQuery(), (err, result) => {
      if(!err && result.records) result.records.forEach(record => this.processRecord(record));
    })
    this.scheduler.addLog(Date.now() + ": finished executing " + this.name);
  }
}

module.exports = Job