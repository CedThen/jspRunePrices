const { RunePrice } = require('./Models')
const mongoose = require('mongoose')
const { dbConnectionString } = require('../../secrets.js')
const data = require('./cleanedSeed.json')
const uri = process.env.MONGODB_URI || dbConnectionString

async function seedDb() {
  await mongoose.connect(uri);
  await mongoose.connection.db.dropCollection('runeprices')
  const dbEntry = data.map(async (dataPoint) => {
    const nextDataPoint = new RunePrice(dataPoint)
    await nextDataPoint.save();
  })
  await Promise.all(dbEntry)
  // const dat = await RunePrice.find();
  await mongoose.disconnect()
}

seedDb();
