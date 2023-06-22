function Add(x, y) {
  return x + y;
}
function Multiply(x, y) {
  return x * y;
}

// module.exports.Addition = Add;
// module.exports.Product = Multiply;

module.exports = { Addition: Add, Product: Multiply }; // if you want to export with differnt names
//module.exports = { Add, Multiply }; //if you export with same name.
