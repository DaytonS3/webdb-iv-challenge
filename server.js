const express = require("express");

const dishRouter = require("./routers/dishRouter");
const recipeRouter = require("./routers/recipeRouter");

const server = express();

server.use(express.json());

server.use("/api/dish", dishRouter);
server.use("/api/recipe", recipeRouter);

server.get("/", (req, res) => {
  res.send("Server Running...");
});

module.exports = server;
