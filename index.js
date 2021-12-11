const cors = require('cors')
const express = require('express')
const path = require('path')
const app = express()

const { getLatestDataPoint, getNumberDataPoints } = require('./server/routes/')
const { retrieveLastestAmount, createDataPoint } = require('./server/db/')
const { flattenAvgs, cleanData, processData, } = require('./server/services/services')

const port = process.env.PORT || 8080
const MILLISECONDS_PER_HOUR = 3600000

const scriptPath = './server/scrapingScript/bsJsp.py'
const uri = process.env.MONGODB_URI || null
console.log(`uri`, uri)
app.use(cors())

const runScraper = async () => {
  console.log('running scraping script')
  const prevData = await retrieveLastestAmount(10)
  const prevAvgData = flattenAvgs(prevData)
  const data = await scrapeJsp()
  const jsonData = cleanData(data)
  const results = processData(jsonData, prevAvgData)
  await createDataPoint(results)
  console.log(`finished`, finished)
}
const scrapeJsp = () => {
  return new Promise((resolve, reject) => {
    const { spawn } = require('child_process');
    const scrape = spawn('python', [scriptPath])
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


app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api/latest', getLatestDataPoint)
app.get('/api/last/:amount', getNumberDataPoints)

app.listen(port, () => console.log(`Express listening on port ${port}`))