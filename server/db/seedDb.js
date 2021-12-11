const { RunePrice } = require('./Models')
const mongoose = require('mongoose')
const { dbConnectionString } = require('../secrets.js')

async function seedDb() {
  await mongoose.connect(dbConnectionString);
  // drop old table
  await mongoose.connection.db.dropCollection('runeprices')
  // add new data
  const dbEntry = seedData.map(async (dataPoint) => {
    const nextDataPoint = new RunePrice(dataPoint)
    await nextDataPoint.save();
  })
  await Promise.all(dbEntry)

  const dat = await RunePrice.find();
  console.log(dat);
  await mongoose.disconnect()
}

seedDb();

const seedData = [{
  runeprices: {
    lem: { bid: [11], ask: [], count: 1, bidAvg: 11, askAvg: 11 },
    pul: {
      bid: [20],
      ask: [20, 20, 20],
      count: 10,
      bidAvg: 20,
      askAvg: 20
    },
    um: { bid: [25], ask: [35], count: 5, bidAvg: 25, askAvg: 30 },
    mal: { bid: [60, 45], ask: [45], count: 7, bidAvg: 52.5, askAvg: 45 },
    ist: {
      bid: [85],
      ask: [90, 95],
      count: 10,
      bidAvg: 85,
      askAvg: 92.5
    },
    gul: {
      bid: [140, 125],
      ask: [130, 135, 140],
      count: 6,
      bidAvg: 132.5,
      askAvg: 135
    },
    vex: {
      bid: [300, 280],
      ask: [300, 300, 275, 325, 290],
      count: 12,
      bidAvg: 290,
      askAvg: 298
    },
    ohm: {
      bid: [570],
      ask: [590, 595, 590, 600],
      count: 5,
      bidAvg: 570,
      askAvg: 593.75
    },
    lo: {
      bid: [],
      ask: [1200],
      count: 7,
      bidAvg: 1100,
      askAvg: 1200
    },
    sur: { bid: [1100, 1150], ask: [], count: 5, bidAvg: 1125, askAvg: 1100 },
    ber: { bid: [2300, 2300], ask: [], count: 5, bidAvg: 2300, askAvg: 2300 },
    jah: { bid: [2000, 1900], ask: [], count: 6, bidAvg: 1950, askAvg: 2000 },
    cham: { bid: [], ask: [220, 210], count: 3, bidAvg: 200, askAvg: 215 },
    zod: { bid: [], ask: [450], count: 1, bidAvg: 450, askAvg: 450 }
  }
},
{
  runeprices: {

    lem: { bid: [], ask: [15], count: 3, bidAvg: 10, askAvg: 15 },
    pul: {
      bid: [],
      ask: [20, 25, 20],
      count: 4,
      bidAvg: 20,
      askAvg: 25
    },
    um: {
      bid: [30],
      ask: [30, 35, 30, 30],
      count: 7,
      bidAvg: 30,
      askAvg: 31
    },
    mal: {
      bid: [45],
      ask: [45, 50, 50],
      count: 7,
      bidAvg: 45,
      askAvg: 48.333333333333336
    },
    ist: {
      bid: [90],
      ask: [90, 95, 85, 90],
      count: 13,
      bidAvg: 90,
      askAvg: 90
    },
    gul: {
      bid: [130],
      ask: [130, 125],
      count: 6,
      bidAvg: 130,
      askAvg: 127.5
    },
    vex: {
      bid: [280],
      ask: [290, 290, 300],
      count: 6,
      bidAvg: 280,
      askAvg: 293.3333333333333
    },
    ohm: { bid: [570], ask: [600], count: 3, bidAvg: 570, askAvg: 600 },
    lo: {
      bid: [1150],
      ask: [1175, 1200, 1200],
      count: 10,
      bidAvg: 1150,
      askAvg: 897.5
    },
    sur: {
      bid: [1035],
      ask: [1100],
      count: 3,
      bidAvg: 1035,
      askAvg: 1100
    },
    ber: {
      bid: [2200],
      ask: [2300, 2250, 2300],
      count: 5,
      bidAvg: 2200,
      askAvg: 2283.3333333333335
    },
    jah: { bid: [], ask: [1900], count: 2, bidAvg: 1900, askAvg: 1900 },
    cham: { bid: [], ask: [225, 225], count: 3, bidAvg: 220, askAvg: 225 },
    zod: { bid: [], ask: [], count: 3, bidAvg: 400, askAvg: 450 }
  },
},
{
  runeprices: {
    lem: { bid: [10], ask: [10, 10], count: 4, bidAvg: 10, askAvg: 10 },
    pul: { bid: [15], ask: [20, 20, 15], count: 3, bidAvg: 15, askAvg: 20 },
    um: { bid: [30], ask: [29, 30], count: 3, bidAvg: 0, askAvg: 0 },
    mal: {
      bid: [45, 40],
      ask: [45, 45, 45, 45],
      count: 10,
      bidAvg: 40,
      askAvg: 45
    },
    ist: {
      bid: [85],
      ask: [
        90, 90, 100, 100,
        90, 90, 100
      ],
      count: 18,
      bidAvg: 90,
      askAvg: 95
    },
    gul: {
      bid: [130],
      ask: [130, 135],
      count: 6,
      bidAvg: 130,
      askAvg: 135
    },
    vex: {
      bid: [280],
      ask: [275, 290, 290, 290],
      count: 5,
      bidAvg: 280,
      askAvg: 285
    },
    ohm: {
      bid: [580],
      ask: [600, 570, 570],
      count: 5,
      bidAvg: 580,
      askAvg: 585
    },
    lo: {
      bid: [1100, 1000, 1100],
      ask: [1100, 1200, 1100,],
      count: 12,
      bidAvg: 1050,
      askAvg: 1150
    },
    sur: {
      bid: [1050],
      ask: [1070, 1050],
      count: 4,
      bidAvg: 1050,
      askAvg: 1060
    },
    ber: {
      bid: [2200],
      ask: [
        2300, 2200, 2200, 2350, 2200
      ],
      count: 12,
      bidAvg: 2200,
      askAvg: 2250
    },
    jah: {
      bid: [1850],
      ask: [1850, 1800, 1850],
      count: 4,
      bidAvg: 1850,
      askAvg: 1850
    },
    cham: { bid: [200], ask: [230, 210], count: 1, bidAvg: 200, askAvg: 220 },
    zod: { bid: [450], ask: [400], count: 1, bidAvg: 450, askAvg: 400 }
  }
},
{
  runeprices: {
    lem: { bid: [10], ask: [15], count: 4, bidAvg: 10, askAvg: 15 },
    pul: { bid: [20], ask: [25], count: 4, bidAvg: 20, askAvg: 25 },
    um: { bid: [25], ask: [30], count: 6, bidAvg: 25, askAvg: 30 },
    mal: { bid: [45], ask: [50], count: 13, bidAvg: 45, askAvg: 26.5 },
    ist: {
      bid: [85, 90],
      ask: [90, 85],
      count: 15,
      bidAvg: 87.5,
      askAvg: 90
    },
    gul: { bid: [130], ask: [130], count: 2, bidAvg: 130, askAvg: 130 },
    vex: { bid: [], ask: [280, 290], count: 3, bidAvg: 270, askAvg: 285 },
    ohm: {
      bid: [570],
      ask: [600, 590, 575, 590, 550, 580],
      count: 9,
      bidAvg: 570,
      askAvg: 580.8333333333334
    },
    lo: {
      bid: [1100, 1100, 1150, 1100],
      ask: [1150, 1150],
      count: 9,
      bidAvg: 1112.5,
      askAvg: 1828
    },
    sur: {
      bid: [1050, 1050],
      ask: [1100, 1050, 1099, 1100, 1100],
      count: 9,
      bidAvg: 1050,
      askAvg: 1089.8
    },
    ber: {
      bid: [2100, 2100],
      ask: [2200, 2200, 2150, 2300],
      count: 12,
      bidAvg: 2100,
      askAvg: 2212.5
    },
    jah: {
      bid: [1500, 1850, 1800, 1850],
      ask: [],
      count: 4,
      bidAvg: 1750,
      askAvg: 1800
    },
    cham: { bid: [200], ask: [], count: 1, bidAvg: 200, askAvg: 220 },
    zod: { bid: [450, 400], ask: [], count: 2, bidAvg: 425, askAvg: 450 }
  }
},
{
  runeprices: {
    lem: { bid: [], ask: [], count: 3, bidAvg: 10, askAvg: 15 },
    pul: { bid: [20], ask: [20], count: 4, bidAvg: 20, askAvg: 20 },
    um: { bid: [], ask: [35], count: 3, bidAvg: 30, askAvg: 35 },
    mal: {
      bid: [45, 40],
      ask: [50, 50],
      count: 7,
      bidAvg: 45,
      askAvg: 50
    },
    ist: {
      bid: [80],
      ask: [90],
      count: 12,
      bidAvg: 80,
      askAvg: 90
    },
    gul: { bid: [130], ask: [130], count: 3, bidAvg: 250, askAvg: 130 },
    vex: {
      bid: [285],
      ask: [285, 275, 290, 285, 285],
      count: 7,
      bidAvg: 285,
      askAvg: 284
    },
    ohm: {
      bid: [],
      ask: [550, 580, 540, 580, 500],
      count: 5,
      bidAvg: 550,
      askAvg: 748.2
    },
    lo: {
      bid: [1100, 1150, 1150],
      ask: [1200, 1150, 2150, 1150, 1175],
      count: 11,
      bidAvg: 1133.3333333333333,
      askAvg: 1365
    },
    sur: {
      bid: [],
      ask: [1050, 1100,],
      count: 6,
      bidAvg: 1050,
      askAvg: 1390.3333333333333
    },
    ber: {
      bid: [20, 2100, 2175],
      ask: [
        2200, 2200, 2150,
        2175, 2200, 2150,
        2021, 2250, 2200
      ],
      count: 16,
      bidAvg: 1431.6666666666667,
      askAvg: 2171.777777777778
    },
    jah: {
      bid: [],
      ask: [1850, 2021, 2150, 1850, 1950],
      count: 5,
      bidAvg: 1850,
      askAvg: 1964.2
    },
    cham: { bid: [200], ask: [210], count: 2, bidAvg: 200, askAvg: 210 },
    zod: {
      bid: [],
      ask: [450, 490, 450, 450],
      count: 4,
      bidAvg: 450,
      askAvg: 460
    }
  }
},
{
  runeprices: {
    lem: { bid: [], ask: [], count: 3, bidAvg: 10, askAvg: 15 },
    pul: { bid: [20], ask: [20], count: 4, bidAvg: 20, askAvg: 20 },
    um: { bid: [], ask: [35], count: 3, bidAvg: 30, askAvg: 35 },
    mal: {
      bid: [45, 40],
      ask: [50, 50],
      count: 7,
      bidAvg: 42.5,
      askAvg: 50
    },
    ist: {
      bid: [80],
      ask: [90],
      count: 12,
      bidAvg: 80,
      askAvg: 90
    },
    gul: { bid: [130], ask: [130], count: 3, bidAvg: 130, askAvg: 130 },
    vex: {
      bid: [285],
      ask: [285, 275, 290, 285, 285],
      count: 7,
      bidAvg: 285,
      askAvg: 284
    },
    ohm: {
      bid: [],
      ask: [550, 580, 580],
      count: 5,
      bidAvg: 550,
      askAvg: 570
    },
    lo: {
      bid: [1100, 1150, 1150],
      ask: [1200, 1150, 1150, 1175],
      count: 11,
      bidAvg: 1133.3333333333333,
      askAvg: 1175
    },
    sur: {
      bid: [],
      ask: [1050, 1100,],
      count: 6,
      bidAvg: 1050,
      askAvg: 1075
    },
    ber: {
      bid: [2100, 2175],
      ask: [
        2200, 2200, 2150,
        2175, 2200, 2150,
        2021, 2250, 2200
      ],
      count: 16,
      bidAvg: 2150,
      askAvg: 2171.777777777778
    },
    jah: {
      bid: [],
      ask: [1850, 1900, 1850, 1950],
      count: 5,
      bidAvg: 1850,
      askAvg: 1900
    },
    cham: { bid: [200], ask: [210], count: 2, bidAvg: 200, askAvg: 210 },
    zod: {
      bid: [],
      ask: [450, 490, 450, 450],
      count: 4,
      bidAvg: 450,
      askAvg: 460
    }
  },
}]
