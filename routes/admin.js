var express = require('express');
var router = express.Router();
var User = require('../models/User')
var Frag = require('../models/Frag')


router.get('/dashboard', function(req, res, next){
    res.render('admin/dashboard', {})

});

router.get('/all-users', function(req, res, next){
  User.find({})
	.sort({timestamp : -1})
  .limit(20)
  .exec(function(err, allUsers){
    if(err) return next(err);
    res.render('admin/all-users', {allUsers: allUsers})
  });
});

router.get('/all-frags', function(req, res, next){
  Frag.find({})
	.sort({timestamp : -1})
  .limit(20)
  .exec(function(err, allFrags){
    if(err) return next(err);
    res.render('admin/all-frags', {allFrags: allFrags})
  });
});


module.exports = router;
