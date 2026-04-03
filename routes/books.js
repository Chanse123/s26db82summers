var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let results = [
    { title: 'Dune', author: 'Frank Herbert', price: 18 },
    { title: '1984', author: 'George Orwell', price: 12 },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 15 }
  ];

  res.render('books', { title: 'Search Results: Books', results: results });
});

module.exports = router;