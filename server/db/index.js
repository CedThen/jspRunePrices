// https://gist.github.com/pasupulaphani/9463004 mongoose connection best practices
const { RunePrice } = require('./Models')
const mongoose = require('mongoose')
const { dbConnectionString } = require('../../secrets.js')

const uri = process.env.MONGODB_URI || dbConnectionString
console.log('process env', process.env.MONGODB_URI)
// read  runePrice data
async function retrieveLatest() {
  await mongoose.connect(uri);
  const data = await RunePrice.findOne().sort({ createdAt: -1 }).limit(1)
  // mongoose.connection.close()
  return data
}

async function retrieveLastestAmount(amount = 5) {
  await mongoose.connect(uri);
  const data = await RunePrice.find().sort({ createdAt: -1 }).limit(amount)
  // mongoose.connection.close()
  return data
}

// write runePrice data
async function createDataPoint(data) {
  await mongoose.connect(uri);
  const nextDataPoint = new RunePrice(data)
  await nextDataPoint.save();
}

module.exports = {
  retrieveLastestAmount,
  retrieveLatest,
  createDataPoint
}