let mongoUrl = require('../mongoUrl.json')

const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
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

const postSignupInfoToDb = async (params) => {
    await portfolioDb.collection(params.collection)
    .findOne({user: params.req.body.username}, (err, results) => {
        if(results === null) {
            putUserInDb(params) 
        } else {
            params.res.send({success: false})
        }
    })
}

const putUserInDb = async (params) => {
    console.log(`
    user: ${params.req.body.username},
    sessionId: ${params.cookie},
    email: ${params.req.body.email},
    `)
    await portfolioDb.collection(params.collection)
    .insert({
        user: params.req.body.username,
        sessionId: params.req.body.cookie,
        email: params.req.body.email,
        portfolio: []
    })
    params.res.cookie("sid", params.cookie)
    params.res.send({success: true})
}

module.exports = {
    getPortfolioFromDb,
    postSignupInfoToDb
}