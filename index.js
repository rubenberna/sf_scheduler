// Include the cluster module
const cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

  // Count the machine's CPUs
  const cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for terminating workers
  cluster.on('exit', function (worker) {

    // Replace the terminated workers
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();

  });

  // Code to run if we're in a worker process
} else {
  const express = require('express');
  const cors = require('cors');
  const session = require('express-session');
  const dotenv = require('dotenv');
  const path = require('path');
  const favicon = require('express-favicon');
  const port = process.env.PORT || 5000;
  dotenv.config();

  const app = express()

  // Load routes
  const contracts = require('./routes/contracts')
  const nps = require('./routes/nps')

  //Middleware
  app.use(cors())

  // Set up session
  app.use(session({
    secret: 's3cret', // it can be anything we want
    resave: true, // changed to true
    saveUninitialized: true,
  }));

  // Use Routes
  app.use('/contracts', contracts)
  app.use('/nps', nps)

  // Handle production
  if (process.env.NODE_ENV === 'production') {
    app.use(favicon(__dirname + '/build/favicon.ico'));
    // Static folder
    app.use(express.static(__dirname));
    // Handle SPA
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    require('dotenv').load();
  }
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  })
}