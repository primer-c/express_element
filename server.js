//1. import express
const express = require('express')
// 6.import path
const path = require('path')

//2. create express server
const app = express()

//5.open express static resource: public
app.use(express.static(path.join(__dirname,'public')))

//3.config port and listen port:3000
const PORT = process.env.NODE_ENV || 5000
app.listen(PORT,console.log(`Server linten on port:http://localhost:${PORT}...`))
