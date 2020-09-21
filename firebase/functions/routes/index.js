var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');


/* GET home page. */
router.get('/', function(req, res, next) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', { title: 'Health Care - Main', pathnames: pathname});
});

router.get('/squat', function (req, res, tnext) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - squart', name:'squat', pathnames: pathname});
});

router.get('/contact', function (req, res) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - contact', pathnames: pathname});

})


module.exports = router;
