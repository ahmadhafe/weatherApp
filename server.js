const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const api = require('./server/routes/cityAPI')

const app = express()
const port = 3005

mongoose.connect("mongodb://localhost/weather",{ useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)

app.listen(port, function() {
    console.log(`Server up and running on port ${port}`)
})