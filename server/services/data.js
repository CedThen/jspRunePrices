const runes = {
  lem: 'lem',
  pul: 'pul',
  um: 'um',
  mal: 'mal',
  ist: 'ist',
  gul: 'gul',
  vex: 'vex',
  ohm: 'ohm',
  lo: 'lo',
  sur: 'sur',
  ber: 'ber',
  jah: 'jah',
  cham: 'cham',
  zod: 'zod'
}

const IsoFtClass = {
  s0g: 'bid',
  s0b: 'ask'
}

const resultsFormat = {
  lem: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  pul: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  um: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  mal: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  ist: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  gul: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  vex: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  ohm: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  lo: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  sur: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  ber: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  jah: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  cham: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
  zod: { bid: [], ask: [], count: 0, bidAvg: 0, askAvg: 0 },
}

const avgPrevFormat = {
  lem: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  pul: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  um: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  mal: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  ist: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  gul: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  vex: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  ohm: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  lo: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  sur: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  ber: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  jah: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  cham: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 },
  zod: { bidAvg: 0, askAvg: 0, bidCount: 0, askCount: 0 }
}

const flattenedAvgs = {
  lem: { s0g: 0, s0b: 0 },
  pul: { s0g: 0, s0b: 0 },
  um: { s0g: 0, s0b: 0 },
  mal: { s0g: 0, s0b: 0 },
  ist: { s0g: 0, s0b: 0 },
  gul: { s0g: 0, s0b: 0 },
  vex: { s0g: 0, s0b: 0 },
  ohm: { s0g: 0, s0b: 0 },
  lo: { s0g: 0, s0b: 0 },
  sur: { s0g: 0, s0b: 0 },
  ber: { s0g: 0, s0b: 0 },
  jah: { s0g: 0, s0b: 0 },
  cham: { s0g: 0, s0b: 0 },
  zod: { s0g: 0, s0b: 0 }
}

module.exports = { runes, IsoFtClass, resultsFormat, avgPrevFormat, flattenedAvgs }