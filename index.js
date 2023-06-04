const express = require('express');
const server = express();
const products = require('./src/data/produts.json');

server.get('/products',(req,res) => {
   return res.json(products)
});

server.listen(port, () => {
console.log('welcome to the glazed donut world')
});

