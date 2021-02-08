const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

app.use('/', indexRouter);


app.listen(process.env.PORT || 8081)