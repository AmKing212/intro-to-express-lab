const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  const { username } = req.params.username;
  const greetings = [
    `Hello there, ${username}`,
    `What a deliht is is to see you once, ${username}, `
  ]
  
  const randomGreeting = greetings[Math.floor(Math.random()* greetings.length)]
  res.send(randomGreeting);
});

app.get("/roll/:number", (req, res) => {
  if(isNaN(req.params.number)){
res.send(`You must specify a number`)
return
  }
  const randomNumber= Math.floor(Math.random() * parseInt(req.params.number))
  res.send(`You rolled a ${randomNumber}`);
});

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get("/collectibles/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  const item = collectibles[index];
  res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`);
});

//   //if conditional that checks to see if the index doesnt correspond 
//   // to an item in the array
//   //if it doesnt, send the user a message saying tis not in stock
//   // if it does correspond, get the item from the array,
//   //then respond with the item name and price

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  let { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;
  
  minPrice = minPrice ? parseFloat(minPrice) : null
  maxPrice = maxPrice ? parseFloat(maxPrice) : null
  
  let filteredShoes = shoes.filter(shoe => {;

  let matchesMinPrice = minPrice === null || shoe.price >= minPrice
  let matchesMaxPrice = maxPrice === null || shoe.price <= maxPrice
  let matchesType = !type || shoe.type === type
  // query parameters
  // min-price
  // max-price
  // type

  return matchesMinPrice && matchesMaxPrice && matchesType
  })

  res.json(filteredShoes);
});

port = 3000;

app.listen(port, () => {
  console.log(`listening on port 3000`);
});


