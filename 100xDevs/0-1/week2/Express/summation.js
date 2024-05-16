const express = require("express");


const app = express();
const port = process.env.PORT || 3000; //default is 3000, can be given by user

app.get("/",(req,res) => {
    let n = req.query.num;
    res.send("sum till ${n} =" + sumtill(n));
})
app.listen(port);