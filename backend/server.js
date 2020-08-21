//modules
let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cors = require("cors");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
app.use(bodyParser());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//src
let portfolio = require('./portfolio/portfolio.js')
let users = require('./portfolio/users.js')
//constants
const USER_COLLECTION = "Users"
//endpoints
app.get("/", (req,res) => {
 res.send(JSON.stringify({success: true, body: 'hello'}))
})

app.get("/getPortfolio", async (req, res) => {
    let params = {
      req: req,
      res: res,
      collection: USER_COLLECTION,
    };
    await portfolio.getPortfolio(params)
})

app.post("/insertTicker", (req,res) => {

})

app.post("/signup", upload.none(), async (req, res) => {
  let params = {
    req: req,
    res: res,
    collection: USER_COLLECTION
  }
  await users.signup(params)
})


app.listen(4000);
