const fs = require('fs')

const configFile = fs.readFileSync('./config.json')
const config = JSON.parse(configFile)

const readJSON = path => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) reject(err)
        else resolve(JSON.parse(data))
    })
})

const writeJSON = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), err => {
        if(err) reject(err)
        else resolve(true)
    })
})

module.exports = {config, readJSON, writeJSON}