const db = require("../db/db");
const dataDAO = require("../dao/cycleData");

class DataService {
  addActivity(dataDto) {
    const { date, distance, avg_speed, calories, top_speed } = dataDto;
    return dataDAO.addActivity(date, distance, avg_speed, calories, top_speed);
  }
  // getActivity(dataDto) {
  // console.log(dataDto);
  // return dataDto.getActivity();
  // }
}

module.exports = new DataService();
