const mongoose = require("../config/db/mongoose");
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
class Server {
  constructor() {
    this.connectMongo();
    this.app = express();
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));
    this.app.use(methodOverride());
    this.app.use(express.static(path.join(__dirname, "../node_modules")));
    switch (process.env.NODE_ENV) {
      case "development":
        this.app.use(morgan("dev"));
        break;
      case "production":
        this.app.use(compression());
        break;
    }
    const course = require("../app/routes/courseRoutes");
    const student = require("../app/routes/studentRoutes");
    this.app.use("/api/courses", course);
    this.app.use("/api/students", student);
    this.app.use(this.errorHandler);
    return this.app;
  }

  errorHandler(err, req, res, next) {
    return res.status(404).send({
      error: err.message
    });
  }

  connectMongo() {
    //mongoose.connect("mongodb://localhost:27017");
    let db = mongoose();
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function() {
      console.log("Connected to MongoDB.");
    });
  }
};

module.exports = Server;
