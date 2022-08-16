var moment = require ('moment')
var date = moment().format('LL')
console.log(date)
const express = require("express");
const app = express();
app.use("/",(req,res) => {
  res.send("The application is running");
});
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
  
