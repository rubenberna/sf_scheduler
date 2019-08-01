const schedule = require('node-schedule');
const ContractJob = require('../jobs/contractsJob');
const NpsJob = require('../jobs/npsJob');

const SchedulerState = { Started:"Started", Stopped:"Stopped" }

class Scheduler {
  constructor(){  
    this.log = []; 
    this.jobs = []; 
    this.status = SchedulerState.Stopped; 
  }

  start(){
    if (this.status == SchedulerState.Started) return ; 
    this.addLog("starting the scheduler");
    // "At 04:05 of every day"
    this.jobs.push(schedule.scheduleJob('5 4 * * *', () => { new ContractJob("contractsjob_scheduled").execute(this)}))
    this.jobs.push(schedule.scheduleJob('5 10 * * *', () => { new ContractJob("contractsjob_scheduled").execute(this)}))
    this.jobs.push(schedule.scheduleJob('5 17 * * *', () => { new ContractJob("contractsjob_scheduled").execute(this)}))
    // "At 05:05 of every day"
    this.jobs.push(schedule.scheduleJob('5 5 * * *', () => { new NpsJob("nps_scheduled").execute(this) }))
    this.jobs.push(schedule.scheduleJob('5 11 * * *', () => { new NpsJob("nps_scheduled").execute(this) }))
    this.jobs.push(schedule.scheduleJob('5 18 * * *', () => { new NpsJob("nps_scheduled").execute(this) }))
    this.status = SchedulerState.Started;
  }

  cancelJobs(){
    if (this.status == SchedulerState.Stopped) return ; 
    this.addLog("cancelling all scheduled jobs..");
    this.jobs.forEach(j => j.cancel())
    this.jobs = [];
    this.status = SchedulerState.Stopped;
  }

  addLog(line, logtoconsole = true){
    this.log.push(line);
    if (logtoconsole) console.log(line); 
  }

  run(job){  job.executeAsync(this); }
}

// use a singleton...
let scheduler = new Scheduler(); 
module.exports = { 
    current: scheduler
} 