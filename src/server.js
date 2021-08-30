const cycleData = require("./data/cycleData");
const express = require("express");
const app = express();
const _ = require("underscore");

const setupServer = () => {
  app.use(express.json());

  app.get("/api/activities", (req, res) => {
    // console.log("test");
    // console.log(cycleData);
    res.send(cycleData);
  });

  app.get("/api/activites/avgspeeds", (req, res) => {
    res.send(cycleData.map((ride) => ride.average_speed));
  });

  app.post("/api/addActivity", (req, res) => {
    cycleData.push(req.body);
    res.sendStatus(201);
  });

  //   app.get("/api/distances", (req, res) => {
  //     res.send(cycleData);
  //   });

  return app;
};

module.exports = { setupServer };
