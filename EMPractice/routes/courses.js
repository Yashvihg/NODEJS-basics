const express = require("express");
const router = express.Router();
let courses = require("../models/courses");

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/newcourse", (req, res) => {
  // console.log("POST handled");
  courses.push(req.body);
  console.log(courses);
  res.json({ msg: "Product Added Successfully !", courseName: req.body.courseName });
  res.send("Posted Succesfully");
});

module.exports = router;
