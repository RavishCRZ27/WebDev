const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.post("/checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyslength = kidneys.length;
  res.send(`You have ${kidneyslength} kidneys`);
});
// global catch
app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry, something went wrong",
  });
});
app.listen(port);
