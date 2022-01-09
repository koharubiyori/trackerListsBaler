const yaml = require('yaml')
const fs = require('fs')
const path = require('path')

/**
 * @typedef Config
 * @property {string} proxyUrl
 * @property {string[]} trackerListUrls 
 * @property {string} serverPort
 */

const configPath = path.join(__dirname, '../../config.yaml')
/**
 * @type {Config}
 */
const config = yaml.parse(fs.readFileSync(configPath, 'utf8'))


module.exports = config