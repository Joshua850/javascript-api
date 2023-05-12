const superTest = require("supertest")("http://localhost:3000/api");
const assert = require("assert");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = {
  getData: async () => {
    try {
      const result = await superTest.get("/data").expect(200);
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  getOne: async (name) => {
    try {
      const result = await superTest.get(`/data/${name}`).expect(200);
      return result;
    } catch (err) {
      console.log(err);
    }
  },
  postData: async (payload) => {
    try {
      const result = await superTest.post("/data").send(payload);

      return result;
    } catch (err) {
      console.log(err);
    }
  },
  deleteData: async (payload) => {
    const result = await superTest.delete(`/data/${payload}`).expect(200);
  },

  updateData: async (_id,payload) => {
    const result = await superTest.put(`/data/${_id}`).send(payload).expect(200);
    console.log(result.body)
    return result;
  },
};
