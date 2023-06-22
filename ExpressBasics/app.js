const express = require("express");
const app = express();
//no need to declare localhost
const port = 3000; // it takes local host by default.

app.get("/", (req, res) => {
  // res.send("<p>Hello World</p>"); //by default it takes content type as HTML. we dont need <h1> tag
  res.sendFile("Index.html", { root: __dirname });
});
app.get("/Clientscript.js", (req, res) => {
  // res.send("<p>Hello World</p>"); //by default it takes content type as HTML. we dont need <h1> tag
  res.sendFile("Clientscript.js", { root: __dirname }); // root: __dirname + "/" + foldername (or) PATHNAME.
});
//it shows error code as 200 by default.

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
