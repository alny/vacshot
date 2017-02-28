var User = require('../models/User')
var Frag = require('../models/Frag')
var express = require('express');
var router = express.Router();
var async = require('async');
var controllers = require('../controllers')


router.get('/userFrags/:createdBy', function(req, res, next){
  var createdBy = req.params.createdBy
  async.waterfall([
  function(callback){
    User.findOne({_id: createdBy}, function(err, foundUser){
      if(err) return next(err)
      callback(err, foundUser)
    })
  },
  function(foundUser, callback){
    Frag.find({})
      .where('createdBy', foundUser)
      .exec(function(err, result) {
        if(err) return next()

        res.json({
          confirmation: 'success',
          result: [result,[foundUser]]

        })
      })
 }
]);
});

router.get('/found/:id', function(req, res, next){
  var id = req.params.id
  Frag.findOne({_id: id})
  .populate('createdBy')
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

router.put('/found/:id', function(req, res, next){
  var id = req.params.id

  async.waterfall([
  function(callback){
    Frag.findById(id, function(err, frag){
    frag.save(function(err, updatedFrag){
      if (err) return handleError(err);
    })
      callback(err, frag)
    })
  },
  function(frag, callback){
    User.findById(frag.createdBy, function(err, user){
      user.points++;

       user.save(function(err, updatedUser){
         if (err) return handleError(err);
         res.json({
           confirmation: 'success',
           result: updatedUser
         })
       })
    })

 }
]);
// async.parallel([
//       function(callback){
//         Frag.findById(id, function(err, frag){
//           if (err) return handleError(err);
//
//           frag.votes.score++;
//           frag.votes.voters.push({
//             id: frag.profile.id
//           })
//           frag.save(function(err, updatedFrag){
//             if (err) return handleError(err);
//             res.json({
//               confirmation: 'success',
//               result: updatedFrag
//             })
//           })
//         })
//       },
//       function(callback){
//         User.findById(frag.createdBy, function(err, user){
//           if (err) return handleError(err);
//
//           user.points++;
//
//           user.save(function(err, updatedFrag){
//             if (err) return handleError(err);
//             res.json({
//               confirmation: 'success',
//               result: updatedFrag
//             })
//           })
//         })
//       }])

});


// async.parallel([
//       function(callback){
//         Frag.findById(id, function(err, frag){
//           if (err) return handleError(err);
//
//           frag.votes.score++;
//           frag.votes.voters.push({
//             id: frag.profile.id
//           })
//           frag.save(function(err, updatedFrag){
//             if (err) return handleError(err);
//             res.json({
//               confirmation: 'success',
//               result: updatedFrag
//             })
//           })
//         })
//       },
//       function(callback){
//         User.findById(frag.createdBy, function(err, user){
//           if (err) return handleError(err);
//
//           user.points++;
//
//           user.save(function(err, updatedFrag){
//             if (err) return handleError(err);
//             res.json({
//               confirmation: 'success',
//               result: updatedFrag
//             })
//           })
//         })
//       }])



module.exports = router
