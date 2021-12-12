// const url = `jspscraper.herokuapp.com`
const url = process.env.ADDRESS_URL || 'localhost'

export const fetchLatestApi = `http://${url}/api/latest/`
export const fetchLastAmountApi = (num) => `http://${url}/api/last/${num}`

