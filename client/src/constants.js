const fixedUrl = `jspscraper.herokuapp.com`
const url = process.env.ADDRESS_URL || 'localhost'
console.log(`url`, url)

export const fetchLatestApi = `http://${fixedUrl}/api/latest/`
export const fetchLastAmountApi = (num) => `http://${fixedUrl}/api/last/${num}`

