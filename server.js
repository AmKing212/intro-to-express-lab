const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hey, Nice to meet you ${username}`);
});

app.get("/roll/:number", (req, res) => {
  const roll = req.params.roll;
  res.send(`Roll a number, I guess`);
});

app.get("/collectibles/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);
});

app.get("/shoes", (req, res) => {
  
  let filteredShoes = shoes
  // query parameters
  // min-price
  // max-price
  // type

  if(req.query['min-price']) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice) )
  }
  if(req.query['max-price']) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice))
  }
  if(req.query['type']) {
    filteredShoes =filteredShoes.filter(shoe => shoe.type === type)
  }

   res.json(filteredShoes)
  
});

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];


port = 3000;

app.listen(port, () => {
  console.log(`listening on port 3000`);
});

// const collectibles = [
//   { name: "shiny ball", price: 5.95 },
//   { name: "autographed picture of a dog", price: 10 },
//   { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
// ];
