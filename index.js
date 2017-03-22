#!/usr/bin/env node
const { cyan, green } = require('chalk')
const express = require('express')
const { readdirSync } = require('fs')
const { resolve, join } = require('path')
const { path, port } = require('yargs').argv

const app = express();
const appPort = port || process.env.PORT || 8000
const directoryPath = resolve(path || 'public')
const hasIndexFile = readdirSync(directoryPath).filter(fileName => fileName === 'index.html').length > 0
const indexFile = hasIndexFile ? join(directoryPath, 'index.html') : join(__dirname, '/public/index.html')

app.use(express.static(directoryPath))
app.get('*', (req, res) => res.sendFile(indexFile))

app.listen(appPort, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`${green('Started')} on port: ${cyan(appPort)}`)
  console.log(`Serving: ${cyan(directoryPath)}`)
})