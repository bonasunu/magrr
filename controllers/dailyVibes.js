const dailyVibes = require('express').Router()

dailyVibes.get('/', async (req, res) => {
  res.json({ status: 'All good!'})
})

module.exports = dailyVibes