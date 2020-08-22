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
let tools = require('./tools/tools')
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

app.post("/insertTicker", upload.none(), (req,res) => {

})
app.post("/login", upload.none(), async (req, res) => {
  let params = {
    req: req,
    res: res,
    collection: USER_COLLECTION,
    cookie: tools.generateId()
  }
  await users.login(params)
})

app.post("/signup", upload.none(), async (req, res) => {
  let params = {
    req: req,
    res: res,
    collection: USER_COLLECTION,
    cookie: tools.generateId()
  }
  await users.signup(params)
})


app.listen(4000);
