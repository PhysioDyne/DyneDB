const express = require("express");
const router = express.Router();
const fs = require("fs");
const fileData = JSON.parse(fs.readFileSync("./Model/database.json"));
const Crud = require("../functions/CRUD");
const crud = new Crud("./Model/database.json");
//data

router.put("/update/:name", (req, res) => {
  const { name } = req.params;
  crud.update(name);
  return res.send({ datas: name });
});

router.delete("/delete/:name", (req, res) => {
  const { name } = req.params;
  crud.delete(name);
  return res.send({ name: name });
});

router.post("/form", (req, res) => {
  crud.create(req.body);
  res.send({ getdata: req.body });
});

router.get("/form/:name", (req, res) => {
  const { name } = req.params;
  const people = crud.find(name);
  if (people) {
    res.status(200).send(people);
  } else {
    res.status(404).send("could not found your searchings");
  }
});

router.get("/", (req, res) => {
  res.send(crud.findAll());
});
module.exports = router;
