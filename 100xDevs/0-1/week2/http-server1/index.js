const express = require("express");
const app = express();
const port = 3000;
const bodyparser= require("body-parser");
const path = require("path");
app.use(express.urlencoded({extended : true}));
app.use(bodyparser.json());
app.get("/ravish", function (req, res) {
  res.json({
    name: "Ravish",
    age: 19,
    number: 7050222115,
    email: "ravishpandey2732005@gmail.com",
  });
});

app.get("/", function (req, res) {
  res.send("Welcome");
});
app.get("/zerodha", function (req, res) {
  res.sendFile(
    "/Users/prometheus/Developer/WebDev/100xDevs/0-1/week1/Zerodha/index.html"
  );
});
app.post("/conversation", (req, res) => {
  console.log(req.body);
  res.send("Successful");
})

app.listen(port);