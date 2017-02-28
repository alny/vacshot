var Tutorial = require('../models/Tutorial')
var express = require('express');
var router = express.Router();
var async = require('async');
var _ = require('underscore');


router.get('/alltutorials', function(req, res, next){
  async.parallel([
       function(callback){
         Tutorial.find({})
         .where('type', 'map')
         .sort('-votes.score')
         .limit(6)
         .exec(function(err, tutorial){
           callback(err, tutorial)
         });
       },

       function(callback){
         Tutorial.find({})
         .where('type', 'grenade')
         .sort('-votes.score')
         .limit(6)
         .exec(function(err, tutorial){
           callback(err, tutorial)
         });
       },
       function(callback){
         Tutorial.find({})
         .where('type', 'weapon')
         .sort('-votes.score')
         .limit(6)
         .exec(function(err, tutorial){
           callback(err, tutorial)
         });
       },

     ], function(err, results){
        if(err) next(err)
        res.json({
          confirmation: 'success',
          results: results
        })
     });
   })

   router.get('/allmaps', function(req, res, next){
     async.parallel([
          function(callback){
            Tutorial.find({})
            .where('map', 'dust2')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },

          function(callback){
            Tutorial.find({})
            .where('map', 'mirage')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },
          function(callback){
            Tutorial.find({})
            .where('map', 'cobblestone')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },
          function(callback){
            Tutorial.find({})
            .where('map', 'cache')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },
          function(callback){
            Tutorial.find({})
            .where('map', 'overpass')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },

          function(callback){
            Tutorial.find({})
            .where('map', 'inferno')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },
          function(callback){
            Tutorial.find({})
            .where('map', 'nuke')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },
          function(callback){
            Tutorial.find({})
            .where('map', 'train')
            .sort('-votes.score')
            .limit(6)
            .exec(function(err, tutorial){
              callback(err, tutorial)
            });
          },

        ], function(err, results){
           if(err) next(err)
           res.json({
             confirmation: 'success',
             results: results
           })
        });
      })

module.exports = router
