const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/example/:name/:age", (req, res) => {
  let { name, age } = req.params;
  console.log(req.query);
  res.send(name + "and" + age);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("succesfully posted data");
});

app.listen(3000);
