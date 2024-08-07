const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var users = [
  {
    name: "John",
    kidneys: [{ healthy: false }, { healthy: true }],
  },
  {
    name: "Amiya",
    kidneys: [{ healthy: false }],
  },
];
app.use(express.json());

app.get("/", (req, res) => {
  const user = req.query.name;
  res.send(printkidneys(user));
});

app.post("/", (req, res) => {
  const user = req.body.user;
  const health = req.body.health;
  users[users.findIndex((u) => u.name === user)].kidneys.push({
    healthy: health,
  });
  res.json({ msg: "Done" });
});

app.listen(port);

function printkidneys(user) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]["name"] == user) {
      console.log(users[i].kidneys);
      return users[i].kidneys;
    }
  }
}
