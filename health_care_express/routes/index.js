var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Health Care - Main', content:'include main.ejs'});
});

router.get('/squat', function (req, res, tnext) {
  res.render('index_squat', {title: 'Health Care - squart', name:'squat'});
});

router.get('/contact', function (req, res) {

  res.render('index_contact', {title: 'Health Care - contact'});

})
module.exports = router;
