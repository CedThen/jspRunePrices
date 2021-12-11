const { runes, IsoFtClass, resultsFormat, avgPrevFormat, flattenedAvgs } = require('./data')
const {
  jsonDeepClone,
  reducePriceArray,
  mapAverages,
  findRunes,
  findSingularRunePrice,
  findMultipleRunePrices,
  updateAccumulator,
  finalizeData
} = require('./helpers')
// const { retrieveLastestAmount, createDataPoint } = require('../db/index.js')
// const { scrapeJsp } = require('../scrapingScript/script.js')

const flattenAvgs = (priceArray) => {
  const summedAvgs = priceArray.reduce(reducePriceArray, jsonDeepClone(avgPrevFormat))
  return mapAverages(summedAvgs, flattenedAvgs)
}

const cleanData = (data) => JSON.parse(data.toString().replace(/"/g, '').replace(/'/g, '"').replace("<b>", '').replace("</b>", ''))

const processData = (data, prevAvgData) => {
  let results = data.reduce((accumulator, current) => {
    const { title, type } = current
    const runesMentioned = findRunes(title, runes)
    const numberRunes = Object.keys(runesMentioned).length
    if (!numberRunes || !IsoFtClass[type]) return accumulator// skip if no runes mentioned or incorrect type
    numberRunes === 1 ?
      findSingularRunePrice(runesMentioned, prevAvgData, current)
      : findMultipleRunePrices(runesMentioned, prevAvgData, current)
    updateAccumulator(accumulator, runesMentioned, type)
    return accumulator
  }, jsonDeepClone(resultsFormat))
  return finalizeData(results, prevAvgData)
}

module.exports = {
  // runScraper,
  flattenAvgs,
  cleanData,
  processData
}

//https://stackoverflow.com/questions/6710236/function-to-create-regex-matching-a-number-range
