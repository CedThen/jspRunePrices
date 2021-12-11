const { priceRangeModifier, standardNumsRegex, kFormatRegex } = require('./constants')
const { runes, IsoFtClass, resultsFormat, avgPrevFormat, flattenedAvgs } = require('./data')

function withinRange(num, range) {
  return num >= range[0] && num <= range[1]
}

function priceRange(num) {
  return [num * (1 - priceRangeModifier), num * (1 + priceRangeModifier)] // what happens if theres MASSIVE moves in price, say after ladder is announced or start of ladder
}

function findAvg(arr) {
  const ans = arr.reduce((prev, curr) => {
    return prev + curr
  }, 0) / arr.length
  return ans ? ans : null
}

function removeZeroes(arr) {
  return arr.filter(i => i != 0)
}

function determinePrice(text) { // returns an array of potential prices, or [0] if none found
  let nums = []
  // first checks for kformat numbers
  let kFormatNums = text.match(kFormatRegex)
  kFormatNums ? nums = parseIntKFormat(kFormatNums) : nums = text.match(standardNumsRegex)
  return nums ? nums.map(num => parseInt(num)) : [0]
}

function parseIntKFormat(priceStr) {
  return [parseFloat(priceStr[0]) * 1000]
}

function reducePriceArray(accumulator, current) {
  Object.keys(current.runeprices).forEach(rune => {
    accumulator[rune].bidAvg += current.runeprices[rune].bidAvg
    accumulator[rune].bidCount += 1
    accumulator[rune].askAvg += current.runeprices[rune].askAvg
    accumulator[rune].askCount += 1
  })
  return accumulator
}

function jsonDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function mapAverages(summedAvgs, flattenedAvgs) {
  const result = jsonDeepClone(flattenedAvgs)
  Object.keys(summedAvgs).forEach((rune) => {
    result[rune].s0g = Math.floor(summedAvgs[rune].bidAvg / summedAvgs[rune].bidCount)
    result[rune].s0b = Math.floor(summedAvgs[rune].askAvg / summedAvgs[rune].askCount)
  })
  return result
}

function filterPrices(price, pRange) {
  return price.filter((p) => withinRange(p, pRange) && p !== new Date().getFullYear())
}

function findRunes(title, runes) {
  const lowcaseTitle = title.toLowerCase()
  const runesMentioned = {}
  Object.values(runes).forEach((rune) => {
    if (lowcaseTitle.includes(rune)) runesMentioned[rune] = 0
  })
  return runesMentioned
}

function findSingularRunePrice(runesMentioned, prevAvgData, dataPoint) {
  const { title, type, comment } = dataPoint
  const firstRune = Object.keys(runesMentioned)[0]
  const pRange = priceRange(prevAvgData[firstRune][type])
  let price = determinePrice(title.toLowerCase())
  // if there is no price and there are comments, look through comments for price
  if (!price[0] && comment.length > 0) price = comment.map(line => determinePrice(line)).flat()
  // look for one price that is within range
  let acceptedPrice = price.filter((p) => withinRange(p, pRange) && p !== new Date().getFullYear()) // avoids 2021 and so on
  // if there is an accepted price, assign. else assign 0
  acceptedPrice.length > 0 ? runesMentioned[firstRune] = acceptedPrice[0] : runesMentioned[firstRune] = 0
  // return one price
}

function findMultipleRunePrices(runesMentioned, prevAvgData, dataPoint) {
  const { type, comment } = dataPoint
  comment.forEach(line => {
    Object.keys(runesMentioned).forEach(rune => {
      const pRange = priceRange(prevAvgData[rune][type])
      let price = determinePrice(line)
      let acceptedPrice = filterPrices(price, pRange)
      line.toLowerCase().includes(rune) && acceptedPrice.length > 0 ? runesMentioned[rune] = acceptedPrice[0] : runesMentioned[rune] = 0
    })
  })
}

function updateAccumulator(accumulator, runesMentioned, type) {
  Object.keys(runesMentioned).forEach(rune => {
    accumulator[rune].count += 1
    accumulator[rune][IsoFtClass[type]] = [...accumulator[rune][IsoFtClass[type]], runesMentioned[rune]]
  })
}

function finalizeData(data, prevAvgData) {
  // clean up zeroes, determines averages
  Object.keys(data).forEach(rune => {
    // if any null bidAvg or askAvg, set it to prevAvgData
    data[rune].bid = removeZeroes(data[rune].bid)
    data[rune].bidAvg = findAvg(data[rune].bid) || prevAvgData[rune].s0g
    data[rune].ask = removeZeroes(data[rune].ask)
    data[rune].askAvg = findAvg(data[rune].ask) || prevAvgData[rune].s0b
  })
  const finaldata = {
    runeprices: data
  }
  return finaldata
}


module.exports = {
  jsonDeepClone,
  reducePriceArray,
  mapAverages,
  findRunes,
  findSingularRunePrice,
  findMultipleRunePrices,
  updateAccumulator,
  finalizeData
}