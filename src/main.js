
const http = require('http')
const { getBaledTrackerLists } = require('./request')
const config = require('./utils/config')

function main() {
  const server = http.createServer(async (req, res) => {
    const baledTrackerLists = await getBaledTrackerLists()
    if (baledTrackerLists.length !== 0) {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(baledTrackerLists.join('\n'))
    } else {
      res.writeHead(504)
      res.end()
    }
  });

  server.listen(config.serverPort)
}

main()

