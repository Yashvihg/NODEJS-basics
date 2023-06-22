const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var courses = [
    {
      id: 1,
      courseName: "Web Development course by Angela",
    },
    {
      id: 2,
      courseName: "React by maximillan",
    },
    {
      id: 3,
      courseName: "Web dev by andrei",
    },
    {
      id: 4,
      courseName: "javascript course",
    },
    {
      id: 5,
      courseName: "HTML/css course",
    },
  ];
  res.json(courses);
});

module.exports = router;
