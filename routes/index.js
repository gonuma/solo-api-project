const express = require("express");
const db = require("../db/db");

const router = express.Router();

const reducer = (accum, currVal) => accum + currVal;
router.post("/activity", async (req, res) => {
  await db("cycle_data").insert(req.body).returning("id");
  res.sendStatus(201);
});

router.get("/activity", async (req, res) => {
  if (req.query.id) {
    await db("cycle_data")
      .select("*")
      .where("id", req.query.id)
      .then((data) => {
        res.send(data);
        return;
      });
    // .catch((err) => console.log(err));
  }
  await db("cycle_data")
    .select("*")
    .then((data) => {
      res.send(data);
      return;
    });
  // .catch((err) => console.log(err));
});

router.get("/activity/average_speed", async (req, res) => {
  if (req.query.limit) {
    let result = [];
    await db("cycle_data")
      .select("*")
      .then((data) => {
        data.map((ele) => result.push(ele.avg_speed));
      })
      .catch((err) => console.log(err));
    result = result.splice(0, req.query.limit);
    let finalInt = result.reduce(reducer) / result.length;
    res.send(`${finalInt}`);
  }
  if (!req.query.limit) {
    let result = [];
    await db("cycle_data")
      .select("*")
      .then((data) => data.map((ele) => result.push(ele.avg_speed)))
      .catch((err) => console.log(err));
    let finalInt = result.reduce(reducer) / result.length;
    res.send(`${finalInt}`);
  }
});

router.delete("/activity", async (req, res) => {
  await db("cycle_data").select("*").where("id", req.query.id).del();

  res.sendStatus(200).json("Activity deleted.");
});

router.patch("/activity", async (req, res) => {
  await db("cycle_data").select("*").where("id", req.query.id).update(req.body);
  res.sendStatus(200);
});

module.exports = router;
