const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const glob = require('glob')
const path = require('path')

glob.sync('/src/models/**/*.js').forEach(function (file) {
  const model = require(path.resolve(file))
  mongoose.model(file, model.schema)
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(process.env.PORT || 8081)
