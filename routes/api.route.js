const router = require('express').Router()
// const AuthRoute = require('./../modules/auth/auth.controller')
// const StudentRoute = require('./../modules/student/student.controller')
const ProductRoute = require('../modules/product/product.controller')

router.use('/product', ProductRoute)
// router.use('/student', StudentRoute)

module.exports = router
