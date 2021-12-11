// not sure why this doesn't work in here

// const scrapeJsp = async () => {
//   const d = new Promise((resolve, reject) => {
//     const { spawn } = require('child_process');
//     const scrape = spawn('python', ['./bsJsp.py']);
//     console.log('spawning')
//     scrape.stdout.on('data', (data) => {
//       console.log(`data`, data.toString())
//       resolve(data)
//     })
//   })
//   const e = await d
//   console.log(e)
//   return e
// }

// let scrapeJsp = new Promise((resolve, reject) => {
//   const { spawn } = require('child_process');
//   const scrape = spawn('python', ['./bsJsp.py']);
//   console.log('spwaning')
//   scrape.stdout.on('data', (data) => {
//     console.log('data coming')
//     resolve(data)
//   })
// })

// const scrapeJsp = () => {
//   return new Promise((resolve, reject) => {
//     const { spawn } = require('child_process');
//     const scrape = spawn('python', ['./bsJsp.py']);
//     console.log('spwaning')
//     scrape.stdout.on('data', (data) => {
//       console.log('data coming')
//       resolve(data)
//     })
//   })
// }

// const scrapeJsp = () => {
//   return new Promise((resolve, reject) => {
//     const { spawn } = require('child_process');
//     console.log('spawning')
//     const scrape = spawn('python', ['./bsJsp.py'])
//     scrape.stdout.on('data', (data) => resolve(data))
//   })
// }

// module.exports = {
//   scrapeJsp
// }