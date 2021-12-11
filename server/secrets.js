const dbCred = {
  host: 'ec2-23-23-141-171.compute-1.amazonaws.com',
  user: 'tldffovnpigvis',
  database: 'jspScraper',
  password: '06dd181befef9b42549050eb5430af7e0314bea6247949d62847e2e5acd6c1d0',
  port: 5432
}

const dbConnectionString = 'mongodb://localhost:27017/jspScraper'

module.exports = {
  // ...dbCred
  dbConnectionString
}