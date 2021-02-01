const express = require('express')
const app = express()
require('dotenv/config')
const api = process.env.API_URL
const morgan = require('morgan')
const APIRoute = require('./routes/api.route')
require('./configs/mongoose')

//middlewares
app.use(morgan('tiny'))

// api routes
app.use(`${api}/`, APIRoute)

app.listen(process.env.PORT, () => {
    console.log('Server is running at port ' + process.env.PORT)
})
