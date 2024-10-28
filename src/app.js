const express = require("express");

const app = express();

app.use("/", (req, ress) => {
  ress.send("Welcome to the dashboard");
});

app.use("/hello", (req, ress) => {
  ress.send("Hello Hellooo");
});

app.use("/test", (req, ress) => {
  ress.send("Hello from the serverrrrr");
});

app.listen(3001, () => {
  console.log("server is running");
});
