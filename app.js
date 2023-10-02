const express = require('express')

const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

mongoConn()

const app = express()

const test = require('./routes/test.js')
const generos = require('./routes/genero')

app.use('/api/v1/tests',test)
app.use('/api/v1/generos',generos)

module.exports = app