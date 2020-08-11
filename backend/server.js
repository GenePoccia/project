//modules
let express = require("express");
let app = express();
let cors = require("cors");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
app.use(bodyParser());
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

app.post("/insertTicker", upload.none(), (req,res) => {

})


app.listen(4000);
