const express = require("express");
const app = express();
const port = 3000;

const courseRoutes = require("./routes/courses");
app.use(express.static("static"));
app.use(express.json());
app.use("/courses", courseRoutes);
app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example Listening on port ${port}`);
});
