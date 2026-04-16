var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('costumes', { title: 'Costumes', items: results });
});

module.exports = router;
