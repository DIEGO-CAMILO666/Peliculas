const express = require('express')

const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

mongoConn()

const app = express()

const test = require('./routes/test.js')

app.use('/api/v1/tests',test)

module.exports = app