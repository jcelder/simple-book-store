const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./server/routes')

const app = express()

app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

app.listen(3000, () => {
  console.log('simple-book-store running on localhost:3000')
})