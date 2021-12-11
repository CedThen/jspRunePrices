const { retrieveLatest, retrieveLastestAmount } = require('../db')

async function getLatestDataPoint(req, res) {
  const data = JSON.stringify(await retrieveLatest())
  res.send(data)
}

async function getNumberDataPoints(req, res) {
  const { amount } = req.params
  const data = JSON.stringify(await retrieveLastestAmount(parseInt(amount)))
  res.send(data)
}

module.exports = {
  getLatestDataPoint,
  getNumberDataPoints
}