const express = require('express')
const app = express()
require('dotenv/config')
const morgan = require('morgan')
const APIRoute = require('./routes/api.route')
require('./configs/mongoose')

//Middlewares
app.use(morgan('tiny'))

//API Routes
app.use(`${api}/`, APIRoute)

const api = process.env.API_URL

//Server
app.listen(process.env.PORT, () => {
    console.log('Server is running at port ' + process.env.PORT)
})
