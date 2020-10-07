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
	res.render('index', {title: 'Health Care - Squat', name:'squat', pathnames: pathname});
});


router.get('/shoulderp', function (req, res, tnext) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - Shoulder Press', name:'shoulderp', pathnames: pathname});
});

router.get('/lunge', function (req, res, tnext) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - lunge', name:'lunge', pathnames: pathname});
});

router.get('/legraise', function (req, res, tnext) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - Leg raise', name:'legraise', pathnames: pathname});
});

router.get('/contact', function (req, res) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - Contact', pathnames: pathname});

})

router.get('/graph', function (req, res) {
	var pathname = url.parse(req.url).pathname;
	res.render('index', {title: 'Health Care - Graph', pathnames: pathname});

});


module.exports = router;
