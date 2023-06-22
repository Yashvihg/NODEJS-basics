// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.static("static")); // built-in middleware we have to use "use" the middleware

// built-in middleware

// app.get("/", (req, res) => {
//     res.sendFile("Index.html", {root: __dirname});
// });
// app.get("/script.js", (req, res) => {
//     res.sendFile("script.js", {root: __dirname});
// });

// app.listen(port, () => {
//     console.log(`example app listening on port ${port}`);
// });

// app.js
// const express = require("express");
// const app = express();
// const port = 3000;
const express = require("express");
const app = express();
const port = 3000;

const productsRouter = require("./routes/products"); //added for products.js
const courseRouter = require("./routes/courses"); // for COURSE file

app.use(express.static("static")); // express is an object. express.static is a function.
app.use("/products", productsRouter); // this maps to product.js
app.use("/courses", courseRouter); // for COURSE file
app.get("/", (req, res) => { // this maps to index.html file. 
  res.sendFile("index.html", { root: __dirname });
});

// app.get("/products", (req, res) => {
//   var products = [
//     {
//       id: 1,
//       title: "MacBookPro",
//     },
//     {
//       id: 2,
//       title: "MacBookAir",
//     },
//   ];
//   res.json(products);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
