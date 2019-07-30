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

    async start(){
        if (this.status == SchedulerState.Started) return ; 
        this.addLog("starting the scheduler");
        this.jobs.push(schedule.scheduleJob('* * * * *', () => { 
            this.addLog("starting a scheduled contractsjob..");
            new ContractJob(this, "contractsjob_scheduled").execute()
        }))
        this.jobs.push(schedule.scheduleJob('* * * * *', () => { 
            this.addLog("starting a scheduled npsjob..");
            new NpsJob(this, "nps_scheduled").execute()
        }))
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
}

let scheduler = new Scheduler(); 

module.exports = { 
    current: scheduler
} 