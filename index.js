const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const dbConnect = require('./config/db')
const port = process.env.PORT || 3000
dbConnect()
app.get('/', (req, res) => {
  res.send('Getting start with mongoose server is running.....')
})

app.listen(port, () => {
  console.log(`mongoose app listening on port ${port}`)
})
