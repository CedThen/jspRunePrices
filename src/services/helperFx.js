export function toFixed(num, fixed) {
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}

export function splitRunes(data) {
  let res = {}
  Object.keys(data[0].runeprices).forEach(rune => {
    data.forEach(dataPoint => {
      // let bidInput = dataPoint.runeprices[rune].bidAvg
      let askInput = dataPoint.runeprices[rune].askAvg
      // console.log(`rune, dataPoint, askInput`, rune, dataPoint, askInput)
      res[rune] ? res[rune].push(askInput) : res[rune] = [askInput] // make an array if not there

    })
  })
  // console.log(`res`, res)
  return res
}

export function extractTimeLabels(data) {
  return data.map(d => new Date(d.createdAt).toLocaleTimeString())
}
