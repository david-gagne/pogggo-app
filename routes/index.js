var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let audience = ["Podcast", "Broadcast", "Video"];
  res.render('index', {audience: audience});
});

// GET pricing page
router.get('/pricing', function(req, res) {
  res.render('pricing');
});

module.exports = router;
