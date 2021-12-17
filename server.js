require('dotenv').config()
const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes");
require('./config/database')
const passport = require('passport')
const app = express();
const path = require('path')

//middlewares
app.use(cors());
app.use(express.json())
app.use(passport.initialize())

app.use("/api", Router);

if(process.env.NODE_ENV){
  app.use(express.static('client/build'))
  app.get('*',(req,res) => {
    res.sendFile(path.join(_dirname+'/client/build/index.html'))
  })
}
app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
