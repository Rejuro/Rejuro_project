const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')

//Подключение к бд
mongoose.connect(
    'mongodb://localhost:2717/rejuro_database',
    {
        useNewUrlParser: true,
    }

)

//Запуск приложения
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Наши роуты
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server started on port ${PORT}`)
