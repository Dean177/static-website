const express = require('express')

const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Started on port: ${port}`)
})