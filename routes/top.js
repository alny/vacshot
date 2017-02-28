var Frag = require('../models/Frag')
var User = require('../models/User')
var express = require('express');
var router = express.Router();
var async = require('async');
var _ = require('underscore');

router.get('/sorted', function(req, res, next) {
  var params = req.query;
  var conditions = {};

  _.each(params, function(value, key) {
    conditions[key] = new RegExp('^' + value + '$', 'i');
  });

  Frag.find(conditions)
    .sort({'votes.score' : -1})
    .limit(8)
    .exec(function(err, result) {
      if (err) return next(err);
      res.json({
        confirmation: 'success',
        result: result
      })
    });
})

router.get('/allfrags', function(req, res, next){
  Frag.find({})
  .sort({'votes.score' : -1})
  .limit(8)
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})


router.get('/ace', function(req, res, next){
  Frag.find({})
  .where('category', 'ace')
  .sort({'votes.score' : -1})
  .limit(8)
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

router.get('/clutch', function(req, res, next){
  Frag.find({})
  .where('category', 'clutch')
  .limit(8)
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      result: result
    })
  })
})


router.get('/top-aces', function(req, res, next){
  Frag.find({})
  .where('category', 'clutch')
  .limit(8)
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      result: result
    })
  })
})



module.exports = router
