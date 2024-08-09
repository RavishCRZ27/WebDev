//complicated input validation
const express = require("express");
const z = require("zod");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  country: z.literal("IN").or(z.literal("US")),
  sex: z.literal("M").or(z.literal("F")),
});

app.post("/signup", (req, res) => {
  const credentials = req.body;
  const response = schema.safeParse(credentials);
  if (!response.success) {
    res.status(411).json({
      msg: "Incorrect Inputs",
    });
  } else {
    res.send(response);
  }
});
// global catch
app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry, something went wrong",
  });
});
app.listen(port);
