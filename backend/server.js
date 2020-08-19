//modules
let express = require("express");
let app = express();
let cors = require("cors");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let multer = require("multer");
let upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//src
let portfolio = require('./portfolio/portfolio.js')

//endpoints
app.get("/", (req,res) => {
 res.send(JSON.stringify({success: true, body: 'hello'}))
})

app.get("/getPortfolio", async (req, res) => {
    let params = {
      req: req,
      res: res,
      collection: "Users",
    };
    await portfolio.getPortfolio(params)
})

app.post("/push-portfolio", upload.none(), async (req, res) => {
  let test = req.body.portfolio
  console.log(test)
  // let params = {
  //   req: req,
  //   res: res,
  //   collection: "Users",
  // };
  // await portfolio.addPortfolio(params)
})

app.post("/insertTicker", (req,res) => {

})


app.listen(4000);
