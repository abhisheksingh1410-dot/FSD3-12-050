import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Hello Express</h1>
        <h2>I am learning Express</h2>
        <h3>the code is minimal and elegant</h3>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
        <h1>About Express</h1>
        <h2>Express is a Node.js web application framework</h2>
        <h3>Express is minimal and flexible</h3>
    `);
});

app.get("/products", (req, res) => {
  const products = {
    id: 1,
    name: "Mobile",
    price: 10000,
  };
  res.json(products);
});

// this line must be last
app.listen(4444, () => console.log("prg1 is running at port 4444"));
