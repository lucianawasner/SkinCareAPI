const express = require('express');
const server = express();
const products = require('./src/data/produts.json');
const port = process.env.PORT || 3338;

server.listen(port, () => {
   console.log(`Listening on http://localhost:${port}/`);
 });

server.get('/products',(req,res) => {
   return res.json(products)
});


