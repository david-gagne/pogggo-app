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

// GET FAQs page
router.get("/frequently-asked-questions", function(req, res) {
  res.render('faqs');
});

// GET contact page
router.get("/contact", function(req, res) {
  res.render('contact');
});

// GET about page
router.get("/about", function(req, res) {
  res.render('about');
});

module.exports = router;
