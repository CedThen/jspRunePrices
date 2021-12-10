export function toFixed(num, fixed) {
  // eslint-disable-next-line
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
  return data.length <= 24 ? data.map(d => displayLocalTime(d.createdAt)) : data.map(d => displayLocalDate(d.createdAt))
}

export function displayLocalTime(time) {
  return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function displayLocalDate(time) {
  return new Date(time).toLocaleDateString([], { month: 'short', day: '2-digit' })
}

export const timeFrameHash = {
  'Daily': 24,
  'Weekly': 168,
  'Monthly': 730
}

export function determineMaxTicks(length) {
  if (length <= timeFrameHash.Daily) return 24
  else if (length <= timeFrameHash.Weekly) return 7
  return 30
}