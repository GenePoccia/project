let Mongo = require("mongodb");
let MongoClient = Mongo.MongoClient;
let ObjectId = Mongo.ObjectId;
let url = "mongodb+srv://eugenio:panama13@cluster0.af3ut.mongodb.net/portfolio?retryWrites=true&w=majority";
let dbs = undefined;
MongoClient.connect(url, (err, allDbs) => {
  console.log(err);
  dbs = allDbs;
});

const getPortfolio = async (params) => {
    let db = dbs.db("Portfolio")
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