const { runePriceSchema } = require('./Schemas')
const mongoose = require('mongoose')

const RunePrice = mongoose.model("RunePrice", runePriceSchema)

module.exports = { RunePrice }