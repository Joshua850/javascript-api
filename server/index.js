const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { Dog } = require("./modal");

app.get("/api/data", async (req, res) => {
  try {
    const allDogs = await Dog.find();
    res.send(allDogs);
  } catch (err) {
    res.send(err);
  }
});
app.get("/api/data/:name", async (req, res) => {
  try {
    const dog = await Dog.findOne(req.params).exec();
    console.log(dog);
    return res.send(dog).status(200);
  } catch (err) {
    res.send(err);
  }
});

app.post("/api/data", async (req, res) => {
  try {
    console.log(req.body);
    const newDog = new Dog({ ...req.body });
    console.log(newDog);
    const insertedDog = await newDog.save();
    res.send(newDog).status(200);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/api/data/:name", async (req, res) => {
  try {
    const doggyname = req.params;
    const dog = await Dog.deleteOne(req.params).exec();
    console.log(doggyname);
    res.send(doggyname.name + " deleted").status(200);
  } catch (err) {
    res.send(err).status(err);
  }
});

app.put("/api/data/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Dog.updateOne({ id }, req.body);
    const updatedDog = await Dog.findById(id);
    res.status(200).json(updatedDog);
  } catch (err) {
    res.send(err).status(404);
  }
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@mydog.xdo3gql.mongodb.net/y"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
