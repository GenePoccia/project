let express = require("express");
let app = express();
let cors = require("cors");
let multer = require("multer");
let upload = multer();
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
app.use(bodyParser());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

let portfolio = require('./portfolio/portfolio.js')

app.get("/", upload.none(), (req,res) => {
 res.send(JSON.stringify({success: true, body: 'hello'}))
})

app.get("/getPortfolio", upload.none(), async (req, res) => {
    let params = {
        req: req,
        res: res
    }
    //grab portfolio from DB
    //this is a placeholder portfolio
    await portfolio.getPortfolio(params)
    // res.send({success: true, body: userPortfolio})
})

app.post("/insertTicker", upload.none(), (req,res) => {

})


app.listen(4000);
