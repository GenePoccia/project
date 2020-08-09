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

app.get("/getPortfolio", upload.none(), (req, res) => {
    //grab portfolio from DB
    //this is a placeholder portfolio
    let userPortfolio = portfolio.getPortfolio()
    
     res.send(JSON.stringify({success: true, body: userPortfolio}))
})


app.listen(4000);
