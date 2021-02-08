const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/mevnstack'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const glob = require('glob')
const path = require('path')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const indexRouter = require('./routes/index')
app.use('/', indexRouter)
glob.sync('./src/routes/*.js').forEach(function (file) {
  const fileRouter = require(path.resolve(file))
  const filename = file.split('/').pop().replace('.js', '')
  app.use('/' + filename, fileRouter)
})

app.use('/', indexRouter)

app.listen(process.env.PORT || 8081)
