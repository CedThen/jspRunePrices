const cors = require('cors')
const express = require('express')

const { getLatestDataPoint, getNumberDataPoints } = require('./routes/')
// const { scrapeJsp } = require('./scrapingScript/script.js')
const app = express()
const port = 8080
const MILLISECONDS_PER_HOUR = 3600000

const { retrieveLastestAmount, createDataPoint } = require('./db/')
const { flattenAvgs, cleanData, processData, } = require('./services/services')

app.use(cors())

const runScraper = async () => {
  console.log('running scraping script')
  const prevData = await retrieveLastestAmount(10)
  const prevAvgData = flattenAvgs(prevData)
  const data = await scrapeJsp()
  const jsonData = cleanData(data)
  const results = processData(jsonData, prevAvgData)
  await createDataPoint(results)
  console.log('finished')
}
const scrapeJsp = () => {
  return new Promise((resolve, reject) => {
    const { spawn } = require('child_process');
    const scrape = spawn('python', ['./scrapingScript/bsJsp.py'])
    scrape.stdout.on('data', (data) => resolve(data))
  })
}


let counter = 0;
runScraper()
setInterval(() => {
  counter++
  console.log(`counter************************************************** `, counter)
  runScraper()
}, MILLISECONDS_PER_HOUR);

app.get('/api/latest', getLatestDataPoint)
app.get('/api/last/:amount', getNumberDataPoints)


app.listen(port, () => console.log(`Express listening on port ${port}`))