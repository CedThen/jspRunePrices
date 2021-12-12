const fixedUrl = `jspscraper.herokuapp.com`
const url = process.env.ADDRESS_URL || 'localhost'
console.log(`url`, url)

export const fetchLatestApi = `https://${fixedUrl}/api/latest/`
export const fetchLastAmountApi = (num) => `https://${fixedUrl}/api/last/${num}`

