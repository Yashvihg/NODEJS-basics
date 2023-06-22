const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var products = [
    {
      id: 1,
      title: "MacBookPro",
    },
    {
      id: 2,
      title: "MacBookAir",
    },
  ];
  res.json(products);
});

router.post("/newproduct", (req, res) => {
  console.log("POST handled");
  res.send("Posted Succesfully");
});

module.exports = router;
