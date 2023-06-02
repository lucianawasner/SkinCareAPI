const express = require('express');
const server = express();
const products = require('./src/data/produts.json');

server.get('/products',(req,res) => {
   return res.json(products)
});

server.listen(3000, () => {
console.log('welcome to the glazed donut world')
});

