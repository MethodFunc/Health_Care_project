var express = require('express');
var router = express.Router();
const admin = require('firebase-admin'); 
/////////////////////////////////////////////// 
/// node.js 예제 /// 
/////////////////////////////////////////////// 

/* GET 클라이언트 접속 */ 
router.get('/get', (req, res, next) => {
	console.log("get send!"); res.send("get send!"); 
	}); 
	
/* POST 클라이언트 접속 */
router.post('/post', () => {
	console.log("post send!"); 
	res.send("post send!"); 
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Health Care - Main'});
});

router.get('/squat', function (req, res, tnext) {
  res.render('index_squat', {title: 'Health Care - squat'});
});

router.get('/contact', function (req, res) {

	res.render('index_contact', {title: 'Health Care - contact'});

})

module.exports = router;
