var express = require('express');
var router = express.Router();

var multer = require('multer');
var path = require('path');

// set storage engine
var storage = multer.diskStorage({
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
  res.render('index');
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
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
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
