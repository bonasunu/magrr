const { request } = require('express')

const dailyVibes = require('express').Router()

dailyVibes.get('/', async (req, res) => {
  res.json({data: 'All good!'})
})

//post

module.exports = dailyVibes