let mongoUrl = require('../mongoUrl.json')

const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = mongoUrl.url
let db;
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    db = client.db("Portfolio")
});

const getPortfolio = async (params) => {
    await db.collection("Users").find({}).toArray((err,results) => {
        params.res.send({success: true, body: results})
    })
}

const addToPortfolio = () => {

}

const deleteFromPortfolio = () => {

}

module.exports = {
    getPortfolio
}