const superTest = require("supertest")("http://localhost:3000/api");
const Utils = require("./apiUtils");
var expect = require("chai").expect;

const brokenPayload = {
  name: "fox",
  age: "seven",
  breed: 5,
};
const payload = {
  name: "jay",
  age: 5,
  breed: "collie",
};
const updatedPayload = {
  name: "jayZ",
  age: 6,
  breed: "border-collie",
};

describe("Api C.R.U.D spec", function () {
  it("should demonstrate validation for POST requests", async function () {
    await Utils.postData(brokenPayload);
    await Utils.postData(payload);
    const result = await Utils.getOne(payload.name);
    expect(result.body.name).to.deep.equal(payload.name);
    await Utils.deleteData(payload.name);
  });

  it("Should read the entries", async function () {
    const result = await Utils.getData();
    expect(result.body).to.instanceOf(Object);
  });

  it("Should update an entry", async function () {
    const result = await Utils.postData(payload);
    //console.log(typeof result.body._id);
    const update=await Utils.updateData(result.body.id, updatedPayload);
    await Utils.deleteData(result.body.name);
  });
});
