var express = require("express");

let app = express();

const SERVER_PORT = 8088;

app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

app.get("/user", (req, res) => {
  res.send(req.query);
});

app.post("/user/:firstname/:lastname", (req, res) => {
  res.send(req.params);
});

app.listen(SERVER_PORT, () => {
  console.log("Server running at http://localhost:%s/", SERVER_PORT);
});
