const port = process.env.PORT || 8080

export const fetchLatestApi = `http://localhost:${port}/api/latest/`
export const fetchLastAmountApi = (num) => `http://localhost:${port}/api/last/${num}`

