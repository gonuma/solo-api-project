const express = require("express");
const dataController = require("../controller/cycleData");
const db = require("../db/db");
const _ = require("underscore");

const router = express.Router();
router.post("/addActivity", dataController.addActivity);

router.get("/getActivity", async (req, res) => {
  if (req.query.id) {
    await db("cycle_data")
      .select("*")
      .where("id", req.query.id)
      .then((data) => res.send(data));
  }
  await db("cycle_data")
    .select("*")
    .then((data) => res.send(data));
});

router.delete("/deleteActivity", async (req, res) => {
  await db("cycle_data").select("*").where("id", req.query.id).del();

  res.sendStatus(200).json("Activity deleted.");
});

router.patch("/updateActivity/", async (req, res) => {
  await db("cycle_data").select("*").where("id", req.query.id).update(req.body);
  res.sendStatus(200);
});

module.exports = router;
