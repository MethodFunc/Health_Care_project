var express = require('express');
var router = express.Router();
var url = require('url');


/* GET home page. */
router.get('/', function(req, res) {
  var pathname = url.parse(req.url).pathname;
  res.render('index', { title: 'Health Care - Main', pathnames: pathname, count:count});
});

router.get('/squat', function (req, res) {
  var pathname = url.parse(req.url).pathname;
  res.render('index', {title: 'Health Care - squart', name:'squat', pathnames: pathname});
});

router.get('/contact', function (req, res) {
  var pathname = url.parse(req.url).pathname;
  res.render('index', {title: 'Health Care - contact', pathnames: pathname});

})


module.exports = router;
