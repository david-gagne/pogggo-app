var express = require('express');
var router = express.Router();
var keys = require('./configuration/keys.js');
var stripe = require('stripe')('keys.stripeSecretKey');

var multer = require('multer');
var path = require('path');

// set storage engine
let storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function(req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// init upload
let upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 },
  fileFilter: function(req, file, callback) {
    checkFileType(file, callback);
  }
}).single('userUpload');

// check File Type
function checkFileType(file, callback) {
  // Allowed extensions
  const filetypes = /mp3|m4a|mp4/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // check mimetype
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return callback(null, true);
  } else {
    callback('Error: Supported audio files only.');
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    stripePublishableKey: keys.stripePublishableKey
  });
});

/* POST home page. */
router.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if(err) {
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file === undefined) {
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('checkout', {
          msg: 'We\'ve received your audio!',
          file: `uploads/${req.file.filename}`
        });

        // res.render('index', {
        //   msg: 'File Uploaded!',
        //   file: `uploads/${req.file.filename}`
        // });
      }
    }
  });
});

// GET pricing page
router.get('/pricing', function(req, res) {
  res.render('pricingMVP');
});

// GET FAQs page
router.get('/frequently-asked-questions', function(req, res) {
  res.render('faqs');
});

// GET contact page
router.get('/contact', function(req, res) {
  res.render('contact');
});

// GET about page
router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/success', function(req, res) {
  res.render('success');
});

// POST charge page
router.post('/charge', function(req, res) {
  let amount = 7999;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  }).then(function(customer) {
    return stripe.charges.create({
      amount: amount,
      description: 'Audio transcription',
      currency: 'usd',
      customer: customer.id
    }).then(function() {
      res.render('success');
    });
  })
});

module.exports = router;
