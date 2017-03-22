#!/usr/bin/env node
const express = require('express')
const { readdirSync } = require('fs')
const { resolve, join } = require('path')
const { path, port } = require('yargs').argv

const app = express();
const appPort = port || process.env.PORT || 8000
const directoryPath = resolve(path || 'public')
const indexFile = readdirSync(directoryPath).filter(file => file.name === 'index.html').length > 0
  ? join(directoryPath, 'index.html')
  : join(__dirname, '/public/index.html')

app.use(express.static(directoryPath))
app.get('*', (req, res) => res.sendFile(indexFile))

app.listen(appPort, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Started on port: ${appPort}`)
  console.log(`Serving: ${directoryPath}`)
})