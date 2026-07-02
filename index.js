const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

var corsOptions = {
  origin: '*' // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
