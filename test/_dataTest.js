//Made before migrating all data to database

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");
const cycleData = require("../src/data/cycleData");
chai.should();
const expect = chai.expect;

const server = setupServer();
describe("Cycling Tracker API Server Get Requests", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });
  it("should return a full list of activities", async () => {
    const res = await request.get("/api/activities");
    res.should.be.json;
    expect(res.body).to.deep.equal(cycleData);
  });
  it("should be able to retrieve average speeds", async () => {
    const res = await request.get("/api/activites/avgspeeds");
    const expected = ["25km/h"];
    expect(res.body).to.deep.equal(expected);
  });
});

describe("Cycling Tracker API Server Post Requests", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });
  it("should be able to add an activity", async () => {
    const newRide = {
      date: "Aug 30 2021",
      distance: "55km",
      average_speed: "24km/h",
      calories: 1200,
      top_speed: "55km/h",
    };
    await request.post("/api/addActivity").send(newRide);
    expect(cycleData.length).to.equal(2);
  });
});
