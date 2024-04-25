const express = require("express");
const app= express();
const PORT = process.env.PORT;

app.get("/",(req,res) => {
    res.send("Welcome to my page");
})
app.listen(PORT);