const db = require("../db/db");

class DataDAO {
  async addActivity(date, distance, avg_speed, calories, top_speed) {
    const [id] = await db("cycle_data")
      .insert({ date, distance, avg_speed, calories, top_speed })
      .returning("id");

    return id;
  }

  // async getActivity() {
  //   const [id] = await db("cycle_data").select("*");

  //   console.log(ride);
  //   return id;
  // }
}

module.exports = new DataDAO();
