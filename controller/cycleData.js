const db = require("../db/db");
const dataService = require("../service/cycleData");

class DataController {
  async addActivity(req, res) {
    try {
      const id = await dataService.addActivity(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
      res.sendStatus(500).json("Something went wrong.");
    }
  }
  // async getActivity(req, res) {
  //   try {
  //     const id = await dataService.getActivity();
  //     console.log(id);
  //     res.status(200).json(id);
  //   } catch (err) {
  //     console.log(err);
  //     res.sendStatus(500).json("Oops, something went wrong.");
  //   }
  // }
}

module.exports = new DataController();
