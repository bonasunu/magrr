const express = require('express')
const app = express()
const dailyVibes = require('./controllers/dailyVibes')

app.use(express.json())
app.use('/', dailyVibes)

module.exports = app