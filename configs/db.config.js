const mongodb = require('mongodb')
const conxnUrl = 'mongodb://localhost:27017'
const dbname = 'eShop'
const oid = mongodb.ObjectID
module.exports = {
    conxnUrl,
    dbname,
    oid,
}
