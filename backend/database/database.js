let mongoUrl = require('../mongoUrl.json')

const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = mongoUrl.url
let portfolioDb;
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    portfolioDb = client.db("Portfolio")
});

const getPortfolioFromDb = async(params) => {
    await portfolioDb.collection(params.collection).find({}).toArray((err,results) => {
        params.res.send({success: true, body: results})
    })
}

module.exports = {
    getPortfolioFromDb
}