var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET pricing page
router.get('/pricing', function(req, res) {
  res.render('pricing');
});

module.exports = router;
