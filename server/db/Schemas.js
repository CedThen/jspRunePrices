const mongoose = require('mongoose')
const { Schema } = mongoose;

const runePriceSchema = new Schema({
  // timestamp: String,
  runeprices: {
    lem: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    pul: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    um: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    mal: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    ist: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    gul: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    vex: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    ohm: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    lo: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    sur: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    ber: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    jah: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    cham: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
    zod: {
      bid: Array,
      ask: Array,
      count: Number,
      bidAvg: Number,
      askAvg: Number
    },
  }
})

runePriceSchema.set('timestamps', true)

module.exports = { runePriceSchema }