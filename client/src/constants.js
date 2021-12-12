const port = process.env.PORT || 8080
// const url = `jspscraper.herokuapp.com`
const url = process.env.ADDRESS_URL
export const fetchLatestApi = `http://${url}:${port}/api/latest/`
export const fetchLastAmountApi = (num) => `http://${url}:${port}/api/last/${num}`

