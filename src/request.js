const { default: Axios } = require('axios')
const tunnel = require('tunnel')
const config = require('./utils/config')

const proxyUrl = config.proxyUrl ? new URL(config.proxyUrl) : null

const axiosInstance = Axios.create({
  ...(proxyUrl && {
    httpsAgent: tunnel.httpsOverHttp({
      proxy: {
        host: proxyUrl.hostname,
        port: proxyUrl.port,
        ...(proxyUrl.username && {
          proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
        })
      },
    })
  })
})

exports.getBaledTrackerLists = () => {
  const promises = config.trackerListUrls.map(item => new Promise((resolve) => {
    axiosInstance.get(item)
      .then(res => res.data
        .split('\n')
        .map(item => item.trim())
      )
      .then(resolve)
      .catch(e => {
        console.error(e)
        resolve([])
      })
  }))

  return Promise.all(promises)
    .then(res => res.flat())
    .then(allTrackers => Array.from(new Set(allTrackers)))
}

