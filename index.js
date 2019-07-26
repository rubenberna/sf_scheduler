const express = require('express')
const app = express()
const path = require('path')

const schedule = require('./schedules/contracts')
const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/log', (req, res) => res.send(schedule.crons))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
