export function toFixed(num, fixed) {
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}

export function splitRunes(data) {
  let res = {}
  Object.keys(data[0].runeprices).forEach(rune => {
    data.forEach(dataPoint => {
      let askInput = dataPoint.runeprices[rune].askAvg
      res[rune] ? res[rune].push(askInput) : res[rune] = [askInput] // make an array if not there
    })
  })
  return res
}

export function extractTimeLabels(data) {
  return data.map(d => new Date(d.createdAt).toLocaleTimeString())
}
