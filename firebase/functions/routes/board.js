var express = require('express');
var router = express.Router();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
var firebase = require("firebase");
var dateFormat = require('dateformat');
var fs = require('fs');
var url = require('url');


router.get('/',function(req, res, next) {
  var pathname = url.parse(req.url).pathname;
  res.redirect('./body/boardList', {title: 'Health Care - board', pathnames: pathname});
});

admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

router.get('/boardList',function(req, res, next) {
  db.collection('board').orderBy("brddate","desc").get()
      .then((snapshot) => {
        var rows = [];
        snapshot.forEach((doc) => {
          var childData = doc.data();
          childData.brddate = dateFormat(childData.brddate,"yyyy-mm-dd");
          rows.push(childData);
        });
        res.render('board/boardList', {rows: rows});
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
});

router.get('/boardRead',function(req, res, next) {
  db.collection('board').doc(req.query.brdno).get()
      .then((doc) => {
        var childData = doc.data();

        childData.brddate = dateFormat(childData.brddate,"yyyy-mm-dd hh:mm");
        res.render('board/boardRead', {row: childData});
      })
});

router.get('/boardForm',function(req,res,next){
  if (!req.query.brdno) {// new
    res.render('board/boardForm', {row:""});
    return;
  }

  // update
  db.collection('board').doc(req.query.brdno).get()
      .then((doc) => {
        var childData = doc.data();
        res.render('board/boardForm', {row: childData});
      })
});

router.post('/boardSave',function(req,res,next){
  var postData = req.body;
  if (!postData.brdno) { // new
    postData.brddate = Date.now();
    var doc = db.collection("board").doc();
    postData.brdno = doc.id;
    doc.set(postData);
  }else {               // update
    var doc = db.collection("board").doc(postData.brdno);
    doc.update(postData);
  }

  res.redirect('boardList');
});

router.get('/boardDelete',function(req,res,next){
  db.collection('board').doc(req.query.brdno).delete()

  res.redirect('boardList');
});

module.exports = router;
