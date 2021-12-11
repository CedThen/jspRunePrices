const priceRangeModifier = 0.25
const standardNumsRegex = /(?<!x)(?<!\d)[\d]+(?!\d)(?!\sx)(?!x)(?!os)(?!sox)(?!\*)/gi // grabs numbers that aren't followed or preceded by x
const kFormatRegex = /\d+\.\d+k/g;

module.exports = {
  priceRangeModifier,
  standardNumsRegex,
  kFormatRegex
}