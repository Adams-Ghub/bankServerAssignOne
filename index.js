const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/serverRoutes");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Adams:Adamsb94@cluster0.fmk2g.mongodb.net/bank?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const server = express();

server.listen(4000, () => {
  console.log("server is running");
});

server.use(bodyParser.json());

server.use(router);
