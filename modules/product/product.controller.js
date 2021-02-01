const express = require('express')

const router = express.Router()

// routes
router.get('/', getAll)
router.post('/login', login)

module.exports = router

function getAll(req, res, next) {
    res.send('hehe')
}

function login(req, res, next) {
    res.send('hi from student login')
}
